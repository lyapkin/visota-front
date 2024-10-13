import styles from "@/styles/catalog.module.css";
import Link from "next/link";
import ProductCharachteristic from "./ProductCharachteristic";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { CartContext } from "@/providers/CartProvider";
import { useParams } from "next/navigation";

const ProductCard = ({ p, setGetPriceFormProduct }) => {
  const { t } = useTranslation();

  const locale = useParams().locale;

  const [cart, addToCart] = useContext(CartContext);

  return (
    <div className={styles["products__card"]}>
      <div className={styles["card__cover"]}>
        <Link href={`/product/${p.slug}/`}>
          <span className={styles["card__presence"]}>
            {p.is_present
              ? t("catalog:presence.on")
              : t("catalog:presence.off")}
          </span>
          <div className={styles["card__image"]}>
            {p.img_urls.length > 0 ? (
              <img
                src={process.env.BACK_URL + "/media/" + p.img_urls[0].img_url}
                height={214}
                width={200}
                alt="фото товара"
              />
            ) : (
              <img src={"/images/noimage.jpg"} />
            )}
          </div>
        </Link>
      </div>
      <div className={styles["card__body"]}>
        <div className={styles["card__name"]}>
          <Link href={`/product/${p.slug}/`}>{p.name}</Link>
        </div>
        <div className={styles["card__caracteristics"]}>
          <ul>
            {p.characteristics
              .map((c) => <ProductCharachteristic key={c.id} c={c} />)
              .slice(0, 3)}
          </ul>
        </div>
        {p.current_price ? (
          <div className={styles["card__order"]}>
            <div className={styles["order__price"]}>
              <div className={styles["price__key"]}>
                <span>{p.current_price && t("catalog:price")}</span>
              </div>
              <div className={styles["price__val"]}>
                <span>{p.current_price && p.current_price + " ₽"}</span>
              </div>
            </div>
            <div className={styles["order__cart-button"]}>
              {!(p.id in cart) ? (
                <button onClick={() => addToCart(p.id)}>
                  {t("catalog:to_cart")}
                  <img src="/svgs/catalog-cart-icon.svg" alt="иконка" />
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
          <div className={styles["card__order"]}>
            <div className={styles["order__get-price-button"]}>
              <button onClick={() => setGetPriceFormProduct(p)}>
                {t("catalog:get_price")}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
