import React from "react";

import styles from "@/styles/cart.module.css";
import CartComponent from "@/components/cart/CartComponent";
import initTranslations from "@/locales/i18n";

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
