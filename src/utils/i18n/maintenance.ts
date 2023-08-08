import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import koTrans from "../../trans/maintenance/ko.json";
import enTrans from "../../trans/maintenance/en.json";

i18n.use(initReactI18next).init({
  resources: {
    ko: { translation: koTrans },
    en: { translation: enTrans },
  },
  debug: true,
  lng: "ko",
  fallbackLng: "en",
});
