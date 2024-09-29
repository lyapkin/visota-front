import Products from "@/components/catalog/Products";
import Spinner from "@/components/Spinner/Spinner";
import { Suspense } from "react";
import { pages } from "../../../../../settings";
import { permanentRedirect } from "next/navigation";
import {
  generateMetadataDynamic,
  getDynamicPageSEO,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";
import initTranslations from "@/locales/i18n";

export const generateMetadata = async ({
  params: { locale, slug },
  searchParams,
}) => {
  const { CATALOG: pathSegment } = pages;

  const data = await getDynamicPageSEO("category", slug, locale);
  const meta = generateMetadataDynamic(pathSegment, slug, locale, data);

  meta.robots =
    Object.keys(searchParams).length > 0
      ? {
          index: false,
          follow: true,
        }
      : meta.robots;

  return meta;
};

const Category = async ({ params: { locale, slug } }) => {
  const { t } = await initTranslations(locale, ["catalog"]);
  await categoryExists(slug, locale);
  const data = await getStaticPageSEO("catalog", locale);

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: t("catalog:catalog"),
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/catalog/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: data.header,
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/catalog/${slug}`,
      },
    ],
  };

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Products catSlug={slug} />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

const categoryExists = async (slug, locale) => {
  if (!slug) return;
  const url = `${process.env.BACK_URL}/${locale}/api/catalog/categories/${slug}/exists/`;
  const response = await fetch(url, {
    next: { revalidate: 60 },
    redirect: "manual",
  });
  if (response.status === 301)
    permanentRedirect(`/${locale}/catalog${response.headers.get("Location")}`);
  if (response.ok) return;
  throw new Error("problem with checking whether a category exists");
};

export default Category;
