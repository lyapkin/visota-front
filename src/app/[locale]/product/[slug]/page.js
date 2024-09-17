import React from "react";
import ProductComponent from "@/components/Product/ProductComponent";
import { notFound } from "next/navigation";

// export const generateMetadata = async ({ params: { locale } }) => {
//   const { t } = await initTranslations(locale, ["meta"]);

//   const { PARTNERS } = pages;

//   const languages = {
//     "x-default": `en${PARTNERS}`,
//   };
//   i18nConfig.locales.forEach((lang) => {
//     if (lang === locale) return;
//     if (lang === i18nConfig.defaultLocale) {
//       languages[lang] = PARTNERS;
//     } else {
//       languages[lang] = `${lang}${PARTNERS}`;
//     }
//   });

//   return {
//     title: t("meta:title"),
//     description: t("meta:description"),
//     alternates: {
//       canonical: `${locale === "ru" ? "" : locale}${PARTNERS}`,
//       languages,
//     },
//   };
// };

const Product = async ({ params: { locale, slug } }) => {
  const product = await getProduct(slug, locale);
  return <ProductComponent product={product} />;
};

const getProduct = async (slug, locale) => {
  const response = await fetch(
    `${process.env.BACK_URL}/${locale}/api/products/${slug}/`
  );
  if (response.status === 404) {
    notFound();
  }
  if (!response.ok) {
    throw new Error(response.status + " запрос отдельного продукта не удался");
  }
  return await response.json();
};

export default Product;
