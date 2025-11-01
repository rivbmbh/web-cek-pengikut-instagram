import { SeoHead } from "@/components/SeoHead";
import { useChangeLanguage } from "@/features/language/components/ChangeLanguageContext";

const NotFound = () => {
  const { isEnglish } = useChangeLanguage();
  return (
    <>
      <SeoHead
        title="404 | InstaCik"
        description="Ups! Halaman yang kamu cari tidak ditemukan di InstaCik."
      />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img
              src="/capybara/masbro.webp"
              alt="capybara"
              className="mx-auto"
            />
            <div className="mt-5">
              <p className="text-7xl font-bold">404</p>
              <p className="text-2xl font-semibold my-4">
                {isEnglish ? "Page not found" : "Halaman tidak ditemukan"}
              </p>
            </div>
            <div className="text-center mt-14">
              <button className="btn btn-dash btn-accent text-lg uppercase">
                <a href="/" className="py-5">
                  {isEnglish ? "Back to Home" : "Kembali ke Home"}
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
