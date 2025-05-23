import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import viTranslations from "./translations/vi";
import jaTranslations from "./translations/ja";

const savedLanguage = localStorage.getItem("dana_language") || "vi";

i18n.use(initReactI18next).init({
  resources: {
    vi: viTranslations,
    ja: jaTranslations,
  },
  lng: savedLanguage, // Ngôn ngữ mặc định
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
