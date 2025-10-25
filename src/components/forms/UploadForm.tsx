import {
  uploadSchema,
  type UploadSchema,
} from "@/features/upload/schemas/uploadSchema";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonSubmit from "../ui/Button/ButtonSubmit";
import { useState } from "react";
import Result from "@/pages/Result";
import { useNavigate } from "react-router-dom";

type UploadFormData = {
  followers?: File;
  following?: File;
};

function UploadForm() {
  const [result, setResult] = useState<{
    notFollowingBack?: string[]; // you follow them, they don't follow you back
    notFollowedBack?: string[]; // they follow you, you don't follow back
    error?: string;
  }>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm<UploadSchema>({
    resolver: zodResolver(uploadSchema),
  });

  // helper: baca File -> parse JSON (gunakan File.text() yang modern)
  const readJson = async (file: File) => {
    const text = await file.text();
    return JSON.parse(text);
  };

  // helper: ekstrak username dari struktur followers (array at root)
  const extractFollowers = (data: any): string[] => {
    if (!data) return [];
    if (Array.isArray(data)) {
      return data
        .flatMap((item: any) => {
          // prefer value, fallback to href processing if needed
          const sld = item?.string_list_data;
          if (!sld || !Array.isArray(sld)) return [];
          // sometimes value exists, sometimes only href
          return sld.map(
            (s: any) => s.value ?? extractUsernameFromHref(s.href)
          );
        })
        .filter(Boolean);
    }
    // fallback: try some other possible shapes
    if (Array.isArray(data?.relationships_followers)) {
      return data.relationships_followers.flatMap(
        (item: any) =>
          item.string_list_data?.map(
            (s: any) => s.value ?? extractUsernameFromHref(s.href)
          ) || []
      );
    }
    return [];
  };
  // helper: ekstrak username dari struktur following (object.relationships_following)
  const extractFollowing = (data: any): string[] => {
    if (!data) return [];
    if (Array.isArray(data)) {
      // sometimes following might also be an array (handle gracefully)
      return data
        .flatMap(
          (item: any) =>
            item?.string_list_data?.map(
              (s: any) => s.value ?? extractUsernameFromHref(s.href)
            ) || []
        )
        .filter(Boolean);
    }
    if (Array.isArray(data.relationships_following)) {
      return data.relationships_following
        .flatMap((item: any) => {
          // prefer title, fallback to string_list_data value or href
          if (item?.title) return item.title;
          const sld = item?.string_list_data;
          if (!sld || !Array.isArray(sld)) return [];
          return sld.map(
            (s: any) => s.value ?? extractUsernameFromHref(s.href)
          );
        })
        .filter(Boolean);
    }
    return [];
  };

  // helper: ambil username dari href contoh:
  // "https://www.instagram.com/gunungawu" -> "gunungawu"
  // "https://www.instagram.com/_u/sadadad" -> "sadadad"
  const extractUsernameFromHref = (href?: string) => {
    if (!href || typeof href !== "string") return undefined;
    try {
      // remove trailing slash if any
      const cleaned = href.replace(/\/+$/, "");
      const parts = cleaned.split("/");
      return parts[parts.length - 1].replace(/^_u/, "").replace(/^@/, "");
    } catch {
      return undefined;
    }
  };

  const navigate = useNavigate();

  const onSubmit = async (data: UploadSchema) => {
    try {
      if (!data.followers || !data.following) {
        setResult({ error: "Both files are required." });
        return;
      }

      const [followersJson, followingJson] = await Promise.all([
        readJson(data.followers),
        readJson(data.following),
      ]);

      const followersArr = extractFollowers(followersJson).map((s) =>
        String(s)
      );
      const followingArr = extractFollowing(followingJson).map((s) =>
        String(s)
      );

      // dedupe (just in case) and lowercase-normalize for comparison
      const norm = (arr: string[]) =>
        Array.from(new Set(arr.map((u) => (u ?? "").toString().trim()))).filter(
          Boolean
        );

      const normFollowers = norm(followersArr);
      const normFollowing = norm(followingArr);

      const notFollowingBack = normFollowing.filter(
        (u) => !normFollowers.includes(u)
      );
      const notFollowedBack = normFollowers.filter(
        (u) => !normFollowing.includes(u)
      );

      // 👉 kirim data ke halaman result
      navigate("/result", {
        state: {
          notFollowingBack,
          notFollowedBack,
        },
      });
    } catch (err) {
      console.error(err);
      setResult({
        error:
          "Failed to read or parse JSON files. Make sure files are valid JSON.",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto gap-y-7 mt-6 w-max"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="followersFile" className="font-semibold text-base">
            Upload JSON file (e.g., followers_1.json)
          </label>
          <input
            type="file"
            accept=".json"
            {...register("followers")}
            className="file-input file-input-accent"
          />
          {errors.followers && (
            <p className="text-error text-sm">{errors.followers.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="followersFile" className="font-semibold text-base">
            Upload JSON file (e.g., following.json)
          </label>
          <input
            type="file"
            accept=".json"
            {...register("following")}
            className="file-input file-input-accent"
          />
          {errors.following && (
            <p className="text-error text-sm">{errors.following.message}</p>
          )}
        </div>

        <div className="mt-4">
          <ButtonSubmit name="checking" />
        </div>
      </form>
    </>
  );
}

export default UploadForm;
