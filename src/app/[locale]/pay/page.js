import s from "@/styles/pay.module.css";
import s2 from "@/styles/delivery.module.css";
import Link from "next/link";
import Image from "next/image";
import PayImage from "@/../public/images/pay/img.png";
import initTranslations from "@/locales/i18n";
import { pages } from "../../../../settings";
import i18nConfig from "../../../../i18nConfig";

export const generateMetadata = async ({ params: { locale } }) => {
  const { t } = await initTranslations(locale, ["meta"]);

  const { PAY } = pages;

  const languages = {
    "x-default": `en${PAY}`,
  };
  i18nConfig.locales.forEach((lang) => {
    if (lang === locale) return;
    if (lang === i18nConfig.defaultLocale) {
      languages[lang] = PAY;
    } else {
      languages[lang] = `${lang}${PAY}`;
    }
  });

  return {
    title: t("meta:title"),
    description: t("meta:description"),
    alternates: {
      canonical: `${locale === "ru" ? "" : locale}${PAY}`,
      languages,
    },
  };
};

export default async function Pay({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["delivery_pay"]);
  return (
    <div className={`first-screen`}>
      <div className={`container ${s.pay}`}>
        <div className={s.wrap}>
          <div>
            <h1 className={s2.title}>{t("delivery_pay:p_title")}</h1>

            <div className={s2.btns}>
              <Link href={"delivery/"}>
                <button className={`${s2.btn} `}>
                  {t("delivery_pay:d_button")}
                </button>
              </Link>
              <Link href={"pay/"}>
                <button className={`${s2.btn} ${s2.btn__active}`}>
                  {t("delivery_pay:p_button")}
                </button>
              </Link>
            </div>
            <h4 className={s.subtitle}>{t("delivery_pay:p_text")}</h4>
            <ul className={s.list}>
              <li className={s.list__item}>{t("delivery_pay:p_list_1")}</li>
              <li className={s.list__item}>{t("delivery_pay:p_list_2")}</li>
              <li className={s.list__item}>{t("delivery_pay:p_list_3")}</li>
              <li className={s.list__item}>{t("delivery_pay:p_list_4")}</li>
              <li className={s.list__item}>{t("delivery_pay:p_list_5")}</li>
              <li className={s.list__item}>{t("delivery_pay:p_list_6")}</li>
            </ul>
          </div>
          <div>
            <Image className={s.img} src={PayImage} alt="Оплата" />
          </div>
        </div>
      </div>
    </div>
  );
}
