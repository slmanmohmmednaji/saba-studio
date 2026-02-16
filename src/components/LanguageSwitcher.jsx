import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const isAr = i18n.language === "ar";

  const toggle = () => {
    i18n.changeLanguage(isAr ? "en" : "ar");
  };

  return (
    <button
      onClick={toggle}
      className="flex h-9 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-black tracking-widest text-ink hover:bg-white/10 transition-all duration-300"
      aria-label="language"
      title={isAr ? "Switch to English" : "التبديل للعربية"}
    >
      {isAr ? "EN" : "AR"}
    </button>
  );
}
