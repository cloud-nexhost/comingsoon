import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import koTrans from "../../trans/index/ko.json";
import enTrans from "../../trans/index/en.json";

i18n.use(initReactI18next).init({
  resources: {
    ko: { translation: koTrans },
    en: { translation: enTrans },
  },
  debug: true,
  lng: "ko",
  fallbackLng: "en",
});
