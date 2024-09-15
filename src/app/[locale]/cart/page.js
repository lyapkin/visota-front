import React from "react";

import styles from "@/styles/cart.module.css";
import CartComponent from "@/components/cart/CartComponent";
import initTranslations from "@/locales/i18n";
import i18nConfig from "../../../../i18nConfig";

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["meta"]);

  const { CART } = pages;

  const languages = {
    "x-default": `en${CART}`,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = CART;
    } else {
      languages[lang] = `${lang}${CART}`;
    }
  });

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    alternates: {
      canonical: `${locale === "ru" ? "" : locale}${CART}`,
      languages,
    },
  };
};

const Cart = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className={`${styles["cart"]} first-screen`}>
      <div className="container">
        <h2 className={styles["cart__title"]}>{t("common:cart")}</h2>
        <CartComponent />
      </div>
    </div>
  );
};

export default Cart;
