import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ar from "./locales/ar.json";
import en from "./locales/en.json";

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Bind i18next to React
  .init({
    resources: {
      ar: { translation: ar },
      en: { translation: en },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React handles XSS
    },
  });

export default i18n;
