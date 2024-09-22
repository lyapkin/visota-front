import i18nConfig from "../../i18nConfig";

export const getStaticPageSEO = async (page, locale) => {
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/seo/meta/static/${page}/`,
    {
      next: { revalidate: 60 },
    }
  );
  if (response.ok) {
    const data = await response.json();
    return data;
  }
  if (response.status === 404) {
    return { translated: false };
  }
  throw new Error("problem with getting metadata fro page: " + page);
};

export const getDynamicPageSEO = async (type, slug, locale) => {
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/seo/meta/${type}/${slug}/`,
    {
      next: { revalidate: 60 },
    }
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

export const generateMetadataDynamic = (pathSegment, slug, locale, data) => {
  const path = `${pathSegment}${slug}/`;
  const canonical = `${locale === "ru" ? "" : locale}${path}`;

  const languages = {
    // "x-default": `en${pathSegment}`,
    "x-default": canonical,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = path;
    } else {
      languages[lang] = `${lang}${path}`;
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
