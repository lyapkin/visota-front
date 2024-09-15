import React, { Suspense } from "react";

import styles from "@/styles/catalog.module.css";
import CatalogContent from "@/components/catalog/CatalogContent";
import initTranslations from "@/locales/i18n";
import Spinner from "@/components/Spinner/Spinner";
import i18nConfig from "../../../../i18nConfig";
import { pages } from "../../../../settings";

export const generateMetadata = async ({
  params: { locale },
  searchParams,
}) => {
  const { t } = await initTranslations(locale, ["meta"]);

  const robots =
    Object.keys(searchParams).length > 0
      ? {
          index: false,
          follow: true,
        }
      : undefined;

  const { CATALOG } = pages;

  const languages = {
    "x-default": `en${CATALOG}`,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = CATALOG;
    } else {
      languages[lang] = `${lang}${CATALOG}`;
    }
  });

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    alternates: {
      canonical: `${locale === "ru" ? "" : locale}${CATALOG}`,
      languages,
    },
    robots,
  };
};

const getData = async (locale) => {
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/products/categories/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(response.status + " запрос не удался");
  }

  return await response.json();
};

const Catalog = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["common"]);
  const categories = await getData(locale);

  return (
    <div className={`${styles["catalog"]} first-screen`}>
      <div className="container">
        <h2 className={styles["catalog__title"]}>{t("common:catalog")}</h2>
        <Suspense fallback={<Spinner />}>
          <CatalogContent categories={categories} />
        </Suspense>
      </div>
    </div>
  );
};

export default Catalog;
