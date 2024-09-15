import React from "react";

import s from "@/styles/policy.module.css";

import initTranslations from "@/locales/i18n";
import { pages } from "../../../../settings";
import i18nConfig from "../../../../i18nConfig";

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["meta"]);

  const { POLICY } = pages;

  const languages = {
    "x-default": `en${POLICY}`,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = POLICY;
    } else {
      languages[lang] = `${lang}${POLICY}`;
    }
  });

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    alternates: {
      canonical: `${locale === "ru" ? "" : locale}${POLICY}`,
      languages,
    },
  };
};

const Policy = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["policy"]);
  return (
    <div
      className={`${s.policy} container first-screen`}
      dangerouslySetInnerHTML={{
        __html: t("policy:private", { interpolation: { escapeValue: false } }),
      }}
    ></div>
  );
};

export default Policy;
