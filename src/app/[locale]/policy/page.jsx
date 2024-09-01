import React from "react";

import s from "@/styles/policy.module.css";

import initTranslations from "@/locales/i18n";

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
