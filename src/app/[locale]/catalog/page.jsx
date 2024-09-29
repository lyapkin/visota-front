import Products from "@/components/catalog/Products";
import Spinner from "@/components/Spinner/Spinner";
import { Suspense } from "react";
import { pages } from "../../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";
import initTranslations from "@/locales/i18n";

export const generateMetadata = async ({
  params: { locale },
  searchParams,
}) => {
  const { CATALOG: pathSegment } = pages;

  const data = await getStaticPageSEO("catalog", locale);
  const meta = generateMetadataStatic(pathSegment, locale, data);

  meta.robots =
    Object.keys(searchParams).length > 0
      ? {
          index: false,
          follow: true,
        }
      : meta.robots;

  return meta;
};

const Catalog = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["catalog"]);

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
    ],
  };

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Products catSlug={null} />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
    </>
  );
};

export default Catalog;
