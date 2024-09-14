import React, { useReducer, useState } from "react";
import Image from "next/image";

import styles from "@/styles/cart.module.css";
import fStyles from "./form.module.css";
import cartReducer, {
  cartActions,
  cartInitState,
} from "@/reducers/cartReducer";
import Button from "../UI/Buttons/Button";
import { useRouter } from "next/navigation";
import getCookie from "@/utils/getCookie";
import { Trans, useTranslation } from "react-i18next";
import Spinner from "../Spinner/Spinner";
import Link from "next/link";

const OrderForm = ({ cart, productsCount, resetCart }) => {
  const router = useRouter();
  const [order, dispatch] = useReducer(cartReducer, cartInitState);
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const csrf = getCookie("csrftoken");

    const data = {
      ...order.data,
      products: cart.map((p) => ({
        product: p.id,
        order_price: p.current_price,
        count: productsCount[p.id],
      })),
    };

    const url = new URL(process.env.BACK_URL + `/api/request/order/`);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrf,
        },
        mode: "same-origin",
        body: JSON.stringify(data),
      });
      if (response.status === 400) {
        const result = await response.json();
        dispatch({ type: cartActions.ERROR, payload: result });
      } else if (response.ok) {
        await response.json();
        resetCart();
        router.push("/success");
        dispatch({ type: cartActions.RESET });
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["relative"]}>
      <fieldset className={styles["form__contact-data"]}>
        <legend>{t("form:input_contacts")}</legend>
        <label
          className={`${styles["form__input"]} ${
            order.error.name && "input-form-error"
          }`}
        >
          <div className={styles["form__icon"]}>
            <Image
              src="/svgs/user-icon.svg"
              width={27}
              height={27}
              alt="иконка"
            />
          </div>
          <input
            placeholder={t("form:placeholder_name")}
            onChange={(e) =>
              dispatch({ type: cartActions.NAME, payload: e.target.value })
            }
            value={order.data.name}
            disabled={loading}
          />
        </label>
        <label
          className={`${styles["form__input"]} ${
            order.error.number && "input-form-error"
          }`}
        >
          <div className={styles["form__icon"]}>
            <Image
              src="/svgs/phone-icon.svg"
              width={27}
              height={27}
              alt="иконка"
            />
          </div>
          <input
            placeholder={t("form:placeholder_number")}
            onChange={(e) =>
              dispatch({ type: cartActions.NUMBER, payload: e.target.value })
            }
            value={order.data.number}
            disabled={loading}
          />
        </label>
        <label
          className={`${styles["form__input"]} ${
            order.error.email && "input-form-error"
          }`}
        >
          <div className={styles["form__icon"]}>
            <Image
              src="/svgs/letter-icon.svg"
              width={27}
              height={27}
              alt="иконка"
            />
          </div>
          <input
            type="email"
            placeholder={t("form:placeholder_email")}
            onChange={(e) =>
              dispatch({ type: cartActions.EMAIL, payload: e.target.value })
            }
            value={order.data.email}
            disabled={loading}
          />
        </label>
        <label
          className={`${styles["form__input"]} ${
            order.error.delivery_address && "input-form-error"
          }`}
        >
          <div className={styles["form__icon"]}>
            <Image
              src="/svgs/location-icon.svg"
              width={27}
              height={27}
              alt="иконка"
            />
          </div>
          <input
            placeholder={t("form:placeholder_delivery_address")}
            onChange={(e) =>
              dispatch({ type: cartActions.ADDRESS, payload: e.target.value })
            }
            value={order.data.delivery_address}
            disabled={loading}
          />
        </label>
        <textarea
          className={`${styles["form__textarea"]} ${
            order.error.comment && "input-form-error"
          }`}
          placeholder={t("form:palceholder_order_comment")}
          onChange={(e) =>
            dispatch({ type: cartActions.COMMENT, payload: e.target.value })
          }
          value={order.data.comment}
          disabled={loading}
        />
      </fieldset>
      {/* <fieldset className={`${styles['form__payment-method']}`}>
                <legend>Выберите способ оплаты</legend>
                <label className={styles['form__radio']} >
                    <input type='radio' name='payment_method'
                        value={'cash'} onChange={(e) => dispatch({ type: cartActions.PAY_METHOD, payload: e.target.value })} />
                    <span className={`${styles['radio__circle']} ${order.data.payment_method === 'cash' && styles['checked']}`}>
                        <img src='/svgs/radio-checked-icon.svg' alt='иконка' />
                    </span>
                    <span className={`${styles['radio__text']} ${order.error.payment_method && 'input-form-error'}`}>Наличный расчет</span>
                </label>
                <label className={styles['form__radio']}>
                    <input type='radio' name='payment_method'
                        value={'non-cash'} onChange={(e) => dispatch({ type: cartActions.PAY_METHOD, payload: e.target.value })} />
                    <span className={`${styles['radio__circle']} ${order.data.payment_method === 'non-cash' && styles['checked']}`}>
                        <img src='/svgs/radio-checked-icon.svg' alt='иконка' />
                    </span>
                    <span className={`${styles['radio__text']} ${order.error.payment_method && 'input-form-error'}`}>Безналичный расчет</span>
                </label>
            </fieldset> */}

      <Button
        text={
          loading ? (
            <Spinner size={20} color={"#fff"} />
          ) : (
            t("form:order_button")
          )
        }
        smallFont={false}
        action={() => {}}
        disable={loading}
      />
      {
        <p className={fStyles["agreement"]}>
          <Trans
            i18nKey={"form:confidential"}
            components={{
              // span: <span />,
              a: <Link href="/policy/" target="_blank" />,
            }}
          />
        </p>
      }
      {/* {loading && <Spinner />} */}
    </form>
  );
};

export default OrderForm;
