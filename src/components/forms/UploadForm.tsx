import {
  uploadSchema,
  type UploadSchema,
} from "@/features/upload/schemas/uploadSchema";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import type { SocialEntry } from "@/types";

interface UploadFormProps {
  isEnglish: boolean;
}

function UploadForm({ isEnglish }: UploadFormProps) {
  const [, setResult] = useState<{
    notFollowingBack?: string[]; // you follow them, they don't follow you back
    notFollowedBack?: string[]; // they follow you, you don't follow back
    error?: string;
  }>({});
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadSchema>({
    resolver: zodResolver(uploadSchema),
  });

  // helper: baca File -> parse JSON (gunakan File.text() yang modern)
  const readJson = async (file: File) => {
    const text = await file.text();
    return JSON.parse(text);
  };

  // helper: ekstrak username dari struktur followers (array at root)
  const extractFollowers = (data: unknown): SocialEntry[] => {
    if (!data) return [];

    // jika array di root
    if (Array.isArray(data)) {
      const out: SocialEntry[] = [];
      data.forEach((item) => {
        const sld = item?.string_list_data;
        if (!Array.isArray(sld)) return;
        sld.forEach((s: any) => {
          const username = (
            typeof s?.value === "string"
              ? s.value
              : extractUsernameFromHref(s?.href)
          ) as string | undefined;
          if (!username) return;
          out.push({
            username,
            link: typeof s?.href === "string" ? s.href : undefined,
            time: s?.timestamp,
          });
        });
      });
      return out;
    }

    // jika object dengan relationships_followers
    if (Array.isArray((data as any)?.relationships_followers)) {
      const out: SocialEntry[] = [];
      (data as any).relationships_followers.forEach((item: any) => {
        const sld = item?.string_list_data;
        if (!Array.isArray(sld)) return;
        sld.forEach((s: any) => {
          const username = (
            typeof s?.value === "string"
              ? s.value
              : extractUsernameFromHref(s?.href)
          ) as string | undefined;
          if (!username) return;
          out.push({
            username,
            link: typeof s?.href === "string" ? s.href : undefined,
            time: s?.timestamp,
          });
        });
      });
      return out;
    }

    return [];
  };
  // helper: ekstrak username dari struktur following (object.relationships_following)
  const extractFollowing = (data: unknown): SocialEntry[] => {
    if (!data) return [];

    if (Array.isArray(data)) {
      const out: SocialEntry[] = [];
      data.forEach((item) => {
        const sld = item?.string_list_data;
        if (!Array.isArray(sld)) return;
        sld.forEach((s: any) => {
          const username = (
            typeof s?.value === "string"
              ? s.value
              : extractUsernameFromHref(s?.href)
          ) as string | undefined;
          if (!username) return;
          out.push({
            username,
            link: typeof s?.href === "string" ? s.href : undefined,
            time: s?.timestamp,
          });
        });
      });
      return out;
    }

    if (Array.isArray((data as any)?.relationships_following)) {
      const out: SocialEntry[] = [];
      (data as any).relationships_following.forEach((item: any) => {
        if (item?.title && typeof item.title === "string") {
          // when the entry uses `title` as username and has nested sld for link/time
          const sld0 = item?.string_list_data?.[0];
          out.push({
            username: item.title,
            link: typeof sld0?.href === "string" ? sld0.href : undefined,
            time: sld0?.timestamp,
          });
          return;
        }

        const sld = item?.string_list_data;
        if (!Array.isArray(sld)) return;
        sld.forEach((s: any) => {
          const username = (
            typeof s?.value === "string"
              ? s.value
              : extractUsernameFromHref(s?.href)
          ) as string | undefined;
          if (!username) return;
          out.push({
            username,
            link: typeof s?.href === "string" ? s.href : undefined,
            time: s?.timestamp,
          });
        });
      });
      return out;
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
      setLoading(true);
      if (!data.followers || !data.following) {
        if (isEnglish) {
          setResult({ error: "Both files are required." });
          return;
        }
        setResult({ error: "Kedua file wajib diupload." });
        return;
      }

      const [followersJson, followingJson] = await Promise.all([
        readJson(data.followers),
        readJson(data.following),
      ]);

      const followersArr = extractFollowers(followersJson);
      const followingArr = extractFollowing(followingJson);

      const norm = (arr: string[]) =>
        Array.from(
          new Set(arr.map((u) => (u ?? "").toString().trim().toLowerCase()))
        ).filter(Boolean);

      const followersUsernames = followersArr.map((u) => u.username);
      const followingUsernames = followingArr.map((u) => u.username);

      const normFollowers = norm(followersUsernames);
      const normFollowing = norm(followingUsernames);

      const notFollowingBack = followingArr.filter(
        (u) => !normFollowers.includes(u.username.trim().toLowerCase())
      );

      const notFollowedBack = followersArr.filter(
        (u) => !normFollowing.includes(u.username.trim().toLowerCase())
      );

      //cek jika format file json bukan seperti dari instgram maka tampil error message
      if (followersArr.length === 0 || followingArr.length === 0) {
        if (isEnglish) {
          toast.error(
            "The uploaded files don't contain valid Instagram data.",
            {
              icon: () => <img src="error.webp" />,
              position: "top-center",
              theme: "colored",
            }
          );
          setResult({
            error:
              "No valid data found. Please make sure you upload Instagram export files.",
          });
          return;
        }
        toast.error(
          "File yang kamu upload tidak sesuai dengan struktur data dari Instagram",
          {
            icon: () => <img src="error.webp" />,
            position: "top-center",
            theme: "colored",
          }
        );
        setResult({
          error:
            "Data nggak ditemukan. Pastikan kamu udah upload file ekspor dari Instagram, ya!",
        });
        return;
      }

      navigate("/result", {
        state: {
          notFollowingBack,
          notFollowedBack,
        },
      });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "An unknown error occurred while reading JSON files.";

      toast.error(`Failed to read or parse JSON files. ${errorMessage}`, {
        icon: () => <img src="error.webp" className="w-10" />,
        position: "top-center",
        theme: "colored",
      });

      setResult({
        error: `Failed to read or parse JSON files. ${errorMessage}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto gap-y-7 mt-6 w-max"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="followersFile" className="font-semibold text-base">
            {isEnglish
              ? "Upload JSON file (e.g., followers_1.json)"
              : "Unggah JSON file (misalnya, followers_1.json)"}
          </label>
          <input
            type="file"
            accept=".json"
            {...register("followers")}
            className="file-input file-input-accent"
          />
          {errors.followers && (
            <p className="text-error text-sm text-start">
              {errors.followers?.message?.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="followersFile" className="font-semibold text-base">
            {isEnglish
              ? "Upload JSON file (e.g., following.json)"
              : "Unggah JSON file (misalnya, following.json)"}
          </label>
          <input
            type="file"
            accept=".json"
            {...register("following")}
            className="file-input file-input-accent"
          />
          {errors.following && (
            <p className="text-error text-sm text-start">
              {errors.following?.message?.toString()}
            </p>
          )}
        </div>

        <div className="mt-4">
          <button
            disabled={loading}
            type="submit"
            className="btn btn-soft btn-accent w-full capitalize"
          >
            {loading ? (
              <>
                <span className="loading loading-spinner bg-accent"></span>
              </>
            ) : isEnglish ? (
              "Checking"
            ) : (
              "Cek sekarang"
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default UploadForm;
