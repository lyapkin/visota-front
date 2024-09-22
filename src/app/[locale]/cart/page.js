import React from "react";

import styles from "@/styles/cart.module.css";
import CartComponent from "@/components/cart/CartComponent";
import initTranslations from "@/locales/i18n";
import { pages } from "../../../../settings";
import {
  generateMetadataStatic,
  getStaticPageSEO,
} from "@/utils/generateMetadataUtil";

export const generateMetadata = async ({ params: { locale } }) => {
  const data = await getStaticPageSEO("cart", locale);

  const { CART: pathSegment } = pages;

  return generateMetadataStatic(pathSegment, locale, data);
};

const Cart = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["common"]);
  const data = await getStaticPageSEO("cart", locale);

  return (
    <div className={`${styles["cart"]} first-screen`}>
      <div className="container">
        <h1 className={styles["cart__title"]}>
          {data.translated ? data.header : t("common:cart")}
        </h1>
        <CartComponent />
      </div>
    </div>
  );
};

export default Cart;
