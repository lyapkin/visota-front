import React from "react";

import initTranslations from "@/locales/i18n";

const Policy = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["policy"]);
  return (
    <div
      className="container first-screen"
      dangerouslySetInnerHTML={{
        __html: t("policy:private", { interpolation: { escapeValue: false } }),
      }}
    ></div>
  );
};

export default Policy;
