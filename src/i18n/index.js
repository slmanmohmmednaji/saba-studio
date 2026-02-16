import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ar from "./ar.json";

export const SUPPORTED_LANGS = ["ar", "en"];
export const DEFAULT_LANG = "ar";

function getInitialLang() {
  const stored = localStorage.getItem("lang");
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("ar")) return "ar";
  return "en";
}

export const setDirForLang = (lang) => {
  const dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", lang);
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar }
    },
    lng: getInitialLang(),
    fallbackLng: DEFAULT_LANG,
    interpolation: { escapeValue: false }
  });

setDirForLang(i18n.language);

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lang", lng);
  setDirForLang(lng);
});

export default i18n;
