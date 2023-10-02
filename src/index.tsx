import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Trans, useTranslation } from "react-i18next";
import {
  appCSS,
  mainCSS,
  titleCSS,
  titleHighlightCSS,
  contentCSS,
  footerCSS,
  subFooterCSS,
  footerLinkCSS,
  footerTitleCSS,
  footerSubtitleCSS,
} from "./styles/emotion/app";

import "./utils/i18n/index";
import "./styles/common.css";

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language.split("-")[0]);

    document.documentElement.lang = navigator.language.split("-")[0];
    document.title = i18n.t("title").replace("<1>", "").replace("</1>", "");
  }, [i18n]);

  return (
    <div css={appCSS}>
      <main css={mainCSS}>
        <h1 css={titleCSS}>
          <Trans i18nKey="title">
            서비스 <span css={titleHighlightCSS}>오픈 준비 중</span>이에요
          </Trans>
        </h1>
        <p css={contentCSS}>{t("desc1")}</p>
        <p css={contentCSS}>{t("desc2")}</p>
        <footer css={subFooterCSS}>
          <a href="https://youtu.be/rDFUl2mHIW4" target="_blank" css={footerLinkCSS}>
            <p css={footerSubtitleCSS}>
              {t("music")}
            </p>
          </a>
        </footer>
        <footer css={footerCSS}>
          <p css={footerTitleCSS}>{t("brand")}</p>
        </footer>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
