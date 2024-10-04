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
  const { TAG: pathSegment } = pages;

  const data = await getDynamicPageSEO("tag", slug, locale);
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

const Tag = async ({ params: { locale, slug } }) => {
  const { t } = await initTranslations(locale, ["catalog"]);
  const data = await getTag(slug, locale);

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
        }/tag/${slug}/`,
      },
    ],
  };

  return (
    <>
      <CatalogHeader header={data.name} />
      <main className={styles["catalog__products"]}>
        <Suspense fallback={<Spinner />}>
          <Products pathSegment={`/tags/${slug}/`} />
        </Suspense>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      <Suspense>
        <PassDynamicBreadcrumb page={"tag"} name={data.name} />
      </Suspense>
    </>
  );
};

const getTag = async (slug, locale) => {
  if (!slug) return;
  const url = `${process.env.BACK_URL}/${locale}/api/catalog/tags/${slug}/`;
  const response = await fetch(url, {
    next: { revalidate: 60 },
    redirect: "manual",
  });
  if (response.status === 301)
    permanentRedirect(`/${locale}/tag${response.headers.get("Location")}`);
  if (response.ok) return await response.json();
  throw new Error("problem with checking whether a category exists");
};

export default Tag;
