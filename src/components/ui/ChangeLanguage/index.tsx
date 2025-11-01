import { useChangeLanguage } from "@/features/language/components/ChangeLanguageContext";

const ChangeLanguage = () => {
  const { isEnglish, changeToEnglish, changeToIndonesia } = useChangeLanguage();
  return (
    <>
      <p className="font-bold text-base">
        <button
          type="button"
          onClick={changeToIndonesia}
          className={`mr-2 cursor-pointer hover:text-accent font-semibold active:underline ${
            isEnglish ? "" : "text-accent underline"
          }`}
        >
          ID
        </button>
        |
        <button
          type="button"
          onClick={changeToEnglish}
          className={`ml-2 cursor-pointer hover:text-accent font-semibold active:underline ${
            !isEnglish ? "" : "text-accent underline"
          }`}
        >
          EN
        </button>
      </p>
    </>
  );
};
export default ChangeLanguage;
