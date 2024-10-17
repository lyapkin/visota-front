import Products from "@/components/catalog/Products";
import Spinner from "@/components/Spinner/Spinner";
import { Suspense } from "react";
import { pages } from "../../../../../../settings";
import { permanentRedirect } from "next/navigation";
import {
  generateMetadataDynamic,
  getDynamicPageSEO,
} from "@/utils/generateMetadataUtil";
import initTranslations from "@/locales/i18n";
import CategoryDescription from "@/components/catalog/CategoryDescription";
import CatalogHeader from "@/components/catalog/CatalogHeader";
import styles from "@/styles/catalog.module.css";
import PassDynamicBreadcrumb from "@/components/Header/PassDynamicBreadcrumb";

export const generateMetadata = async ({
  params: { locale, slug },
  searchParams,
}) => {
  const { CATALOG: pathSegment } = pages;

  const data = await getCategory(slug, locale);
  const meta = generateMetadataDynamic(pathSegment, slug, locale, data.seo);

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
  const data = await getCategory(slug, locale);

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
        name: data.name,
        item: `${process.env.BACK_URL}${
          locale === "ru" ? "" : "/" + locale
        }/catalog/${slug}/`,
      },
    ],
  };

  return (
    <>
      <CatalogHeader header={data.name} />
      <main className={styles["catalog__products"]}>
        <Suspense fallback={<Spinner />}>
          <Products pathSegment={`/categories/${slug}/`} />
        </Suspense>
      </main>
      <CategoryDescription description={data.description} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      <Suspense>
        <PassDynamicBreadcrumb page={"category"} name={data.name} />
      </Suspense>
    </>
  );
};

const getCategory = async (slug, locale) => {
  if (!slug) return;
  const url = `${process.env.BACK_URL}/${locale}/api/catalog/categories/${slug}/`;
  const response = await fetch(url, {
    next: { revalidate: 60 },
    redirect: "manual",
  });
  if (response.status === 301)
    permanentRedirect(`/${locale}/catalog${response.headers.get("Location")}`);
  if (response.ok) return await response.json();
  throw new Error("problem with checking whether a category exists");
};

export default Category;
