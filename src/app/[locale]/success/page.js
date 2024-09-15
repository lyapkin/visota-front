import React from "react";
import Image from "next/image";

import s from "@/styles/success.module.css";
import initTranslations from "@/locales/i18n";
import { pages } from "../../../../settings";
import i18nConfig from "../../../../i18nConfig";

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["meta"]);

  const { SUCCESS } = pages;

  const languages = {
    "x-default": `en${SUCCESS}`,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = SUCCESS;
    } else {
      languages[lang] = `${lang}${SUCCESS}`;
    }
  });

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    alternates: {
      canonical: `${locale === "ru" ? "" : locale}${SUCCESS}`,
      languages,
    },
  };
};

const Success = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["form"]);
  return (
    <div className={`${s["success"]} first-screen`}>
      <div className="container">
        <h1 className={s["success__title"]}>{t("form:success.title")}</h1>
        <div className={s["success__content"]}>
          <div className={s["success__icon"]}>
            <Image src={"/svgs/success.svg"} width={45} height={45} />
          </div>
          <div className={s["success__text"]}>
            {t("form:success.text_1")}
            <br />
            {t("form:success.text_2")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
