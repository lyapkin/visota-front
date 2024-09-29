import React from "react";
import ProductComponent from "@/components/Product/ProductComponent";
import { notFound, permanentRedirect } from "next/navigation";
import {
  generateMetadataDynamic,
  getDynamicPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({ params: { locale, slug } }) => {
  const pathSegment = "/product/";

  const data = await getDynamicPageSEO("product", slug, locale);

  return generateMetadataDynamic(pathSegment, slug, locale, data);
};

const Product = async ({ params: { locale, slug } }) => {
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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductComponent product={product} />
    </>
  );
};

const getProduct = async (slug, locale) => {
  const response = await fetch(
    `${process.env.BACK_URL}/${locale}/api/catalog/products/${slug}/`,
    {
      next: { revalidate: 60 },
      redirect: "manual",
    }
  );
  if (response.status === 301) {
    permanentRedirect(`/${locale}/product${response.headers.get("Location")}`);
  }
  if (!response.ok) {
    throw new Error(response.status + " запрос отдельного продукта не удался");
  }
  return await response.json();
};

export default Product;
