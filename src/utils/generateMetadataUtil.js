import i18nConfig from "../../i18nConfig";

export const getStaticPageSEO = async (page, locale) => {
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/seo/meta/static/${page}/`
  );
  if (response.ok) {
    return await response.json();
  }
  if (response.status === 404) {
    return { translated: false };
  }
  throw new Error("problem with getting metadata fro page: " + page);
};

export const generateMetadataStatic = (pathSegment, locale, data) => {
  const canonical = `${locale === "ru" ? "" : locale}${pathSegment}`;

  const languages = {
    // "x-default": `en${pathSegment}`,
    "x-default": canonical,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = pathSegment;
    } else {
      languages[lang] = `${lang}${pathSegment}`;
    }
  });

  const meta = data.translated ? data.meta : {};

  return {
    ...meta,
    alternates: {
      canonical,
      languages,
    },
  };
};
