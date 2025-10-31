import { SeoHead } from "@/components/SeoHead";
import { useChangeLanguage } from "@/features/language/components/ChangeLanguageContext";
import { TypeAnimation } from "react-type-animation";

const Privacy = () => {
  const { isEnglish } = useChangeLanguage();
  return (
    <>
      <SeoHead
        title="Privacy | InstaCik"
        description="Cari tau bagaimana kami mengelolah data anda. Kami tidak menyimpan data yang anda unggah pada halaman upload semua hanya bersifat static tidak disimpan pada database atau storage manapun"
      />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="bg-linear-to-r from-accent via-teal-200 to-emerald-300 bg-clip-text text-6xl font-extrabold text-transparent ...">
              Insta
              <span className="bg-linear-to-r bg-clip-text from-emerald-200 via-teal-200 to-accent">
                Cik
              </span>
            </h1>
            <div className="py-10">
              <img src="cool.webp" alt="capybara" className="w-44 mx-auto" />
            </div>
            <div className="space-y-4">
              <p className="text-3xl font-bold text-center">
                <TypeAnimation
                  sequence={
                    isEnglish
                      ? [
                          "Find out who’s following, unfollowing, or ghosting you!",
                          500,
                        ]
                      : [
                          "Cari tahu siapa yang ngikutin kamu, berhenti ngikutin, atau cuma ngintip doang tanpa interaksi!",
                          500,
                        ]
                  }
                  speed={40}
                  repeat={Infinity}
                />
              </p>
            </div>
            <div className="text-center mt-14">
              <button className="btn btn-dash btn-accent text-lg uppercase">
                <a href="/upload" className="py-5">
                  {isEnglish ? "Get started" : "Mulai sekarang"}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
