import UploadForm from "@/components/forms/UploadForm";
import { SeoHead } from "@/components/SeoHead";
import { useChangeLanguage } from "@/features/language/components/ChangeLanguageContext";

const Upload = () => {
  const { isEnglish } = useChangeLanguage();
  return (
    <>
      <SeoHead
        title="Upload | InstaCik"
        description="Unggah file JSON hasil ekspor dari Instagram kamu untuk melihat siapa yang tidak follow back."
      />
      <div className="bg-base-200">
        <div className="flex justify-center w-full items-center px-4 min-h-screen">
          {isEnglish ? (
            <div className="px-4 sm:px-0 mx-auto 2xl:w-3/4">
              <h2 className="text-3xl text-center font-bold pb-5">
                Find out who’s not following you back on Instagram
              </h2>
              <UploadForm isEnglish={isEnglish} />
              <p className="text-sm text-center my-7">
                If you don't have the JSON files yet, visit the&nbsp;
                <a href="/tutorial" className="underline font-semibold">
                  tutorial
                </a>{" "}
                page to learn how to get them.
              </p>
            </div>
          ) : (
            <div className="px-4 sm:px-0 mx-auto 2xl:w-3/4">
              <h2 className="text-3xl text-center font-bold pb-5">
                Cari tau siapa yang tidak ikuti balik kamu di Instagram
              </h2>
              <UploadForm isEnglish={isEnglish} />
              <p className="text-sm text-center my-7">
                Jika kamu belum punya file JSON-nya kunjungi halaman&nbsp;
                <a href="/tutorial" className="underline font-semibold">
                  tutorial
                </a>{" "}
                untuk melihat cara mendapatkannya.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Upload;
