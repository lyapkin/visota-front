import React, { Suspense } from "react";
import ProductComponent from "@/components/Product/ProductComponent";
import { permanentRedirect } from "next/navigation";
import { generateMetadataDynamic } from "@/utils/generateMetadataUtil";
import initTranslations from "@/locales/i18n";
import PassDynamicBreadcrumb from "@/components/Header/PassDynamicBreadcrumb";
import getRedirectUrl from "@/utils/getRedirectUrl";

export const generateMetadata = async ({ params: { locale, slug } }) => {
  const pathSegment = "/product/";

  const data = await getProduct(slug, locale);

  return generateMetadataDynamic(pathSegment, slug, locale, data.seo);
};

const Product = async ({ params: { locale, slug } }) => {
  const { t } = await initTranslations(locale, ["catalog"]);
  const product = await getProduct(slug, locale);
  const offers =
    product.current_price || product.actual_price
      ? {
          "@type": "Offer",
          price: product.current_price || product.actual_price,
          priceCurrency: "RUB",
        }
      : undefined;
  const image =
    product.img_urls.length > 0 ? product.img_urls[0].img_url : undefined;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image,
    offers,
  };

  const jsonLdBreadcrumbs =
    product.categories.length > 0
      ? {
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
              name: product.categories[0].name,
              item: `${process.env.BACK_URL}${
                locale === "ru" ? "" : "/" + locale
              }/catalog/${product.categories[0].slug}/`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: product.name,
              item: `${process.env.BACK_URL}${
                locale === "ru" ? "" : "/" + locale
              }/product/${slug}/`,
            },
          ],
        }
      : {
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
              position: 1,
              name: product.name,
              item: `${process.env.BACK_URL}${
                locale === "ru" ? "" : "/" + locale
              }/product/${slug}/`,
            },
          ],
        };

  return (
    <>
      <ProductComponent product={product} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />

      <Suspense>
        <PassDynamicBreadcrumb
          breadCrumbs={
            product.categories.length > 0
              ? [
                  { segment: "catalog", name: t("catalog:catalog") },
                  {
                    segment: `catalog/${product.categories[0].slug}`,
                    name: product.categories[0].name,
                  },
                  { segment: slug, name: product.name },
                ]
              : [
                  { segment: "catalog", name: t("catalog:catalog") },
                  { segment: slug, name: product.name },
                ]
          }
        />
      </Suspense>
    </>
  );
};

const getProduct = async (slug, locale) => {
  const response = await fetch(
    `${process.env.BACK_URL}/${locale}/api/catalog/products/${slug}/`,
    {
      next: { revalidate: 0 },
      redirect: "manual",
    }
  );
  if (response.status === 301) {
    permanentRedirect(
      getRedirectUrl(response.headers.get("Location"), locale, "/product")
    );
  }
  if (response.status === 404) {
    permanentRedirect("/");
  }
  if (response.ok) return await response.json();
  throw new Error(response.status + " запрос отдельного продукта не удался");
};

export default Product;
