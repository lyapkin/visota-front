"use client";

import usePartnersData from "@/hooks/usePartnersData";
import s from "@/styles/partners.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PartnersForm from "../Form/PartnersForm";

export default function PartnersTabs() {
  const [active, setActive] = useState(0);
  const tabs = usePartnersData();
  const { t } = useTranslation();

  return (
    <>
      <div className={s.btns}>
        {tabs.map((tab, i) => {
          return (
            <button
              key={tab.id}
              className={`${s.btn} ${active === i && s.btn__active}`}
              onClick={() => setActive(i)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      {active === 0 && (
        <div className={`${s.content} ${s.enterprises}`}>
          {/* <h2 className={s.content__title}>
                        {t('partners:tab_1_title')}
                    </h2> */}
          <p
            className={s.content__text}
            dangerouslySetInnerHTML={{
              __html: t("partners:tab_1_text", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></p>
          <span>{t("partners:tab_1_sub")}</span>
          <PartnersForm />
        </div>
      )}
      {active === 1 && (
        <div className={s.content}>
          {/* <h2 className={s.content__title}>
                        {t('partners:tab_2_title')}
                    </h2> */}
          <p
            className={s.content__text}
            dangerouslySetInnerHTML={{
              __html: t("partners:tab_2_text", {
                interpolation: { escapeValue: false },
              }),
            }}
          ></p>
        </div>
      )}
    </>
  );
}
