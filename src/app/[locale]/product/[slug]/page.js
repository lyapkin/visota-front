import Search from "@/components/Search/Search";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductComponent from "@/components/Product/ProductComponent";
import initTranslations from "@/locales/i18n";
import { pages } from "../../../../../settings";

import styles from "@/styles/product.module.css";
import i18nConfig from "../../../../../i18nConfig";

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
  const { t } = await initTranslations(locale, ["catalog"]);

  return (
    <div className={`${styles["product"]} first-screen`}>
      <div className="container">
        <aside className={styles["product__head"]}>
          <Search />
          <Link href="/catalog/" className={styles["product__catalog-button"]}>
            <Image
              src={"/svgs/horizontal-bars-icon.svg"}
              width={18}
              height={16}
            />
            {t("catalog:components_catalog")}
          </Link>
        </aside>
        <ProductComponent slug={slug} />
        <div className={styles["product__delivery-wrapper"]}>
          <div className={styles["product__delivery"]}>
            <div className={styles["product__delivery-block"]}>
              <div className={styles["delivery-block__img"]}>
                <Image
                  src={"/images/product-delivery-block/truck.png"}
                  width={170}
                  height={160}
                  alt="фон"
                />
              </div>
              <div className={styles["delivery-block__text"]}>
                <span className={styles["delivery-block__header"]}>
                  {t("catalog:delivery_info_1")}
                </span>
                {/* <span className={styles['delivery-block__description']}>Полученные заказы до 16:00, будут отправлены в тот же день</span> */}
              </div>
            </div>
            <div className={styles["product__delivery-block"]}>
              <div className={styles["delivery-block__img"]}>
                <Image
                  src={"/images/product-delivery-block/box.png"}
                  width={170}
                  height={160}
                  alt="фон"
                />
              </div>
              <div className={styles["delivery-block__text"]}>
                <span className={styles["delivery-block__header"]}>
                  {t("catalog:delivery_info_2")}
                </span>
                {/* <span className={styles['delivery-block__description']}>Полученные заказы до 16:00, будут отправлены в тот же день</span> */}
              </div>
            </div>
            <div className={styles["product__delivery-block"]}>
              <div className={styles["delivery-block__img"]}>
                <Image
                  src={"/images/product-delivery-block/calendar.png"}
                  width={170}
                  height={160}
                  alt="фон"
                />
              </div>
              <div className={styles["delivery-block__text"]}>
                <span className={styles["delivery-block__header"]}>
                  {t("catalog:delivery_info_3")}
                </span>
                {/* <span className={styles['delivery-block__description']}>Пн-Пт, с 08:00 до 18:00,</span>
                                <span className={styles['delivery-block__description']}>Сб, с 10:00 до 15:00, вс выходной</span> */}
              </div>
            </div>

            <div className={styles["product__delivery-block-shadow"]}></div>
            <div className={styles["product__delivery-block-shadow"]}></div>
            {/* <div className={styles['product__delivery-block-shadow']}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
