import Products from "@/components/catalog/Products";
import Spinner from "@/components/Spinner/Spinner";
import initTranslations from "@/locales/i18n";
import { Suspense } from "react";
import { pages } from "../../../../../settings";
import i18nConfig from "../../../../../i18nConfig";
import { notFound, permanentRedirect, redirect } from "next/navigation";

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
    process.env.BACK_URL + `/${locale}/api/catalog/categories/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(response.status + " запрос не удался");
  }

  return await response.json();
};

const Catalog = async ({ params: { locale, slug } }) => {
  await isCategoryExists(slug);
  return (
    <Suspense fallback={<Spinner />}>
      <Products catSlug={slug ? slug[0] : null} />
    </Suspense>
  );
};

const isCategoryExists = async (slug) => {
  if (!slug) return;
  const response = await fetch(
    process.env.BACK_URL + "/api/catalog/categories/" + slug + "/exists/"
  );
  if (response.status == 404) notFound();
  if (response.ok) return;
  throw new Error("problem with checking whether a category exists");
};

export default Catalog;