"use client";
import { CartContext } from "@/providers/CartProvider";
import { LocationNameContext } from "@/providers/LocationNameProvider";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "@/styles/product.module.css";
import ProductSlider from "../Slider/ProductSlider";
import Image from "next/image";
import Popup from "../popup/Popup";
import GetPriceForm from "../Form/GetPriceForm";

const ProductComponent = ({ product }) => {
  const locale = useParams().locale;
  const [aboutBlock, setAboutBlock] = useState("char");

  const { t } = useTranslation();

  const [cart, addToCart] = useContext(CartContext);

  const [isGetPriceFormShown, setIsGetPriceFormShown] = useState(false);

  return (
    <>
      {product && (
        <main className={styles["product__content"]}>
          <div className={styles["product__slider"]}>
            <ProductSlider imgs={product.img_urls} />
          </div>
          <div className={styles["product__title"]}>
            <div className={styles["title__name"]}>
              <h1 className={styles["product-name"]}>{product.name}</h1>
            </div>
            <div className={styles["title__product-code"]}>
              <span className={styles["product-code__key"]}>
                {t("catalog:part_number")}:{" "}
              </span>
              <span className={styles["product-code__val"]}>
                {product.code}
              </span>
            </div>
          </div>
          <div className={styles["product__about"]}>
            <div className={styles["about__buttons"]}>
              <button
                className={styles[`${aboutBlock === "char" && "active"}`]}
                onClick={() => setAboutBlock("char")}
              >
                {t("catalog:charachteristics")}
              </button>
              <button
                className={styles[`${aboutBlock === "desc" && "active"}`]}
                onClick={() => setAboutBlock("desc")}
              >
                {t("catalog:description.title")}
              </button>
              <button
                className={styles[`${aboutBlock === "doc" && "active"}`]}
                onClick={() => setAboutBlock("doc")}
              >
                {t("catalog:documentation.title")}
              </button>
            </div>
            <div className={styles["about__prod-info"]}>
              <div
                className={styles["prod-info__characteristics"]}
                hidden={aboutBlock !== "char"}
              >
                <ul className={styles["characteristics__list"]}>
                  <li>
                    <span className={styles["characteristics__list-key"]}>
                      {t("catalog:presence.title")}
                    </span>
                    <span
                      className={styles["characteristics__list-dots"]}
                    ></span>
                    <span
                      className={`${styles["characteristics__list-val"]} ${
                        product.is_present && styles["present"]
                      }`}
                    >
                      {product.is_present
                        ? t("catalog:presence.on")
                        : t("catalog:presence.off")}
                    </span>
                  </li>
                  {product.characteristics.map((item) => (
                    <li key={item.id}>
                      <span className={styles["characteristics__list-key"]}>
                        {item.characteristic.name}
                      </span>
                      <span
                        className={styles["characteristics__list-dots"]}
                      ></span>
                      <span className={styles["characteristics__list-val"]}>
                        {item.characteristic_value.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={styles["prod-info__description"]}
                hidden={aboutBlock !== "desc"}
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
              <div
                className={styles["prod-info__documentation"]}
                hidden={aboutBlock !== "doc"}
              >
                {t("catalog:documentation.text")}
              </div>
            </div>
            {product.current_price ? (
              <div className={styles["about__cart"]}>
                <div className={styles["about__price"]}>
                  <div className={styles["price__current"]}>
                    {product.current_price && product.current_price + " ₽"}
                  </div>
                  <div
                    className={styles["price__actual"]}
                    hidden={product.actual_price === product.current_price}
                  >
                    {product.actual_price + " ₽"}
                  </div>
                  <div
                    className={styles["price__discount_text"]}
                    hidden={product.actual_price === product.current_price}
                  >
                    {t("catalog:price_discount")}
                  </div>
                </div>
                <div
                  className={`${styles["about__cart-button"]} ${
                    product.id in cart && styles["delete"]
                  }`}
                >
                  {!(product.id in cart) ? (
                    <button onClick={() => addToCart(product.id)}>
                      {t("catalog:to_cart")}{" "}
                      <Image
                        src="/svgs/catalog-cart-icon.svg"
                        width={36}
                        height={36}
                        alt="иконка"
                      />
                    </button>
                  ) : (
                    <button>
                      {t("catalog:in_cart")}{" "}
                      <img src="/svgs/cart-check-icon.svg" alt="иконка" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className={styles["about__cart"]}>
                <div className={styles["about__cart-get-price-button"]}>
                  <button onClick={() => setIsGetPriceFormShown(true)}>
                    {t("catalog:get_price")}
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className={styles["product__extra-info"]}>
            <div className={styles["extra-info"]}>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("catalog:info_1", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                ></div>
                <img
                  src={"/images/product/papers.png"}
                  width={100}
                  height={100}
                  style={{ objectFit: "cover", width: "100%" }}
                  alt="картика с документам"
                />
              </div>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("catalog:info_2", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                ></div>
                <img
                  src={"/images/product/woman.png"}
                  width={100}
                  height={100}
                  style={{ objectFit: "cover", width: "100%" }}
                  alt="девушка"
                />
              </div>
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("catalog:info_3", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                ></div>
                <img
                  src={"/images/product/map.png"}
                  width={100}
                  height={100}
                  style={{ objectFit: "cover", width: "100%" }}
                  alt="карта"
                />
              </div>
            </div>
          </div>
        </main>
      )}
      {isGetPriceFormShown && (
        <Popup close={() => setIsGetPriceFormShown(false)}>
          <GetPriceForm product={product} />
        </Popup>
      )}
    </>
  );
};

export default ProductComponent;
