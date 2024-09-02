import Image from "next/image";
import flag from "@/../public/images/conctacts/flag.png";
import call from "@/../public/images/conctacts/call.svg";
import s from "@/styles/contacts.module.css";
import initTranslations from "@/locales/i18n";

export default async function Contacts({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["contacts", "common"]);
  return (
    <div className={`first-screen`}>
      <div className="container">
        <h1 className={s.title}>{t("common:contacts")}</h1>
        <div className={s.items}>
          <div className={s.item}>
            <h5 className={s.item__title}>{t("contacts:office_title")}</h5>
            <div className={s.flag}>
              <div className={s.flag__img}>
                <Image src={flag} />
              </div>
              <div>
                {/* <p className={s.flag__title}>
                                    Торговая точка и офис
                                </p> */}
                <p className={s.flag__text}>{t("common:address")}</p>
              </div>
            </div>
            <div className={s.time}>
              <h4 className={s.subtitle}>{t("contacts:schedule_title")}</h4>
              <div className={s.time__wrap}>
                <p>
                  {t("common:schedule_workweek")} <br />
                  {t("common:schedule_weekend")}
                </p>
                <p>{t("contacts:msk_wharehouse_sch")}</p>
              </div>
            </div>
            <div className={s.tel}>
              <h4 className={`${s.subtitle} ${s.tel__title}`}>
                {t("common:tel")}
              </h4>
              <div className={s.tel__number}>
                <div className={s.tel__img}>
                  <Image src={call} />
                </div>
                <a className={s.tel__link} href="tel:88007005413">
                  8 800 700 54 13 <span>- {t("contacts:free_call")}</span>
                </a>
                <a
                  className={`${s.tel__link} ${s.tel__link__light}`}
                  href="tel:+79677436716"
                >
                  +7 (967) 743-67-16
                </a>
              </div>
              {/* <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p> */}
              {/* <div className={s.tel__right}>
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                                
                            </div> */}
            </div>
            <div className={s.email}>
              <h4 className={`${s.subtitle}`}>{t("contacts:mail")}</h4>
              <p className={s.email__text}>
                <a href="mailto:info@visota13.ru">info@visota13.ru</a>
              </p>
            </div>
          </div>
          <div className={s.item}>
            <h5 className={s.item__title}>{t("contacts:details.title")}</h5>
            <p className={s.item__text}>
              {t("contacts:details.company")} <br />
              {t("contacts:details.inn")} 0277050347 <br />
              {t("contacts:details.kpp")} 027601001 <br />
              {t("contacts:details.orgn")} 1020203090038
              <br />
              {t("contacts:details.regist_number")}: 02 №006689731
              {/* ЕГРЮЛ 116965814096 от 09.12.2016г. ????? */}
              <br />
              {t("contacts:details.okpo")}: 55835677
              <br />
              {t("contacts:details.bank_key")}: {t("contacts:details.bank_val")}
              <br />
              {t("contacts:details.bik")}: 042202824
              <br />
              {t("contacts:details.ras_acc")}: 40702810629300009834
              <br />
              {t("contacts:details.kor_acc")}: 30101810200000000824
              <br />
              {t("contacts:details.legal_address_key")}:&nbsp;
              <span
                dangerouslySetInnerHTML={{
                  __html: t("contacts:details.legal_address_val", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></span>
              <br />
              {t("contacts:details.mail_address_key")}:&nbsp;
              <span
                dangerouslySetInnerHTML={{
                  __html: t("contacts:details.mail_address_val", {
                    interpolation: { escapeValue: false },
                  }),
                }}
              ></span>
              <br />
              {t("contacts:details.ceo_key")}: {t("contacts:details.ceo_val")}
            </p>
          </div>
          <div className={s.item}>
            <h5 className={s.item__title}>{t("contacts:spb_wh")}</h5>
            <div className={s.flag}>
              <div className={s.flag__img}>
                <Image src={flag} />
              </div>
              <div>
                {/* <p className={s.flag__title}>
                                    Торговая точка и офис
                                </p> */}
                <p className={s.flag__text}>{t("contacts:spb_wh_address")}</p>
              </div>
            </div>
            {/* <div className={s.time}>
                            <h4 className={s.subtitle}>Время работы</h4>
                            <div className={s.time__wrap}>
                                <p>
                                    Пн-Пт, с 09:00 до 21:00 <br /> Сб-Вс, с
                                    09:00 до 20:00
                                </p>
                                <p>Технический отдел: Круглосуточно</p>
                            </div>
                        </div>
                        <div className={s.tel}>
                                <h4 className={`${s.subtitle} ${s.tel__title}`}>
                                    Телефон
                                </h4>
                                <div className={s.tel__number}>
                                    <div className={s.tel__img}>
                                        <Image src={call} />
                                    </div>
                                    <a
                                        className={s.tel__link}
                                        href="tel:88007005413"
                                    >
                                        8 800 700 54 13
                                    </a>
                                    <a
                                        className={`${s.tel__link} ${s.tel__link__light}`}
                                        href="tel:+79677436716"
                                    >
                                        +7 (967) 743-67-16
                                    </a>
                                </div>
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                            <div className={s.tel__right}>
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                                
                            </div>
                        </div>
                        <div className={s.email}>
                            <h4 className={`${s.subtitle}`}>Почта</h4>
                            <p className={s.email__text}>
                                <a href="mailto:info@visota13.ru">
                                    info@visota13.ru
                                </a>
                            </p>
                        </div> */}
          </div>
          <div className={s.item}>
            <h5 className={s.item__title}>{t("contacts:msk_wh")}</h5>
            <div className={s.flag}>
              <div className={s.flag__img}>
                <Image src={flag} />
              </div>
              <div>
                {/* <p className={s.flag__title}>
                                    Торговая точка и офис
                                </p> */}
                <p className={s.flag__text}>{t("contacts:msk_wh_address")}</p>
              </div>
            </div>
            <div className={s.time}>
              <h4 className={s.subtitle}>{t("contacts:schedule_title")}</h4>
              <div className={s.time__wrap}>
                <p>{t("contacts:msk_sch_val")}</p>
                {/* <p>Технический отдел: Круглосуточно</p> */}
              </div>
            </div>
            {/* <div className={s.tel}>
                                <h4 className={`${s.subtitle} ${s.tel__title}`}>
                                    Телефон
                                </h4>
                                <div className={s.tel__number}>
                                    <div className={s.tel__img}>
                                        <Image src={call} />
                                    </div>
                                    <a
                                        className={s.tel__link}
                                        href="tel:88007005413"
                                    >
                                        8 800 700 54 13
                                    </a>
                                    <a
                                        className={`${s.tel__link} ${s.tel__link__light}`}
                                        href="tel:+79677436716"
                                    >
                                        +7 (967) 743-67-16
                                    </a>
                                </div>
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                            <div className={s.tel__right}>
                                <p className={s.tel__text}>
                                    Проектирование, монтаж и другие вопросы
                                </p>
                                
                            </div>
                        </div>
                        <div className={s.email}>
                            <h4 className={`${s.subtitle}`}>Почта</h4>
                            <p className={s.email__text}>
                                <a href="mailto:info@visota13.ru">
                                    info@visota13.ru
                                </a>
                            </p>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
