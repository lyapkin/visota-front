"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";

import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { LocationNameContext } from "@/providers/LocationNameProvider";
import { useTranslation } from "react-i18next";
import useLocationData from "@/hooks/useLocationData";

const Location = () => {
  const pathname = usePathname();
  const sections = pathname.split("/").filter((p) => p != "");
  const [name] = useContext(LocationNameContext);
  const { t } = useTranslation();
  const paths = useLocationData();

  return (
    <div className={styles["header-mode__location"]}>
      <Link href="/">
        <Image src="/svgs/home-icon1.svg" width={32} height={32} />
      </Link>
      {sections.map((s, i) => {
        const value =
          i !== 0 && sections[i - 1] === "product"
            ? name.product || t("breadcrumbs:product")
            : i !== 0 && sections[i - 1] === "catalog"
            ? name.category || t("breadcrumbs:category")
            : i !== 0 && sections[i - 1] === "blog"
            ? name.post || t("breadcrumbs:post")
            : i !== 0 && sections[i - 1] === "tag"
            ? name.tag || t("breadcrumbs:tag")
            : s === "tag" || s === "product"
            ? paths["catalog"]
            : paths[s];

        if (value === undefined) return null;

        const section = s === "tag" || s === "product" ? "catalog" : s;

        if (i === sections.length - 1) {
          return (
            <div key={section}>
              <span>/</span>
              <span className={styles["breadcrumbs-end"]}>{value}</span>
            </div>
          );
        }

        return (
          <div key={section}>
            <span>/</span>
            <Link href={`/${section}/`}>{value}</Link>
          </div>
        );
      })}
    </div>
  );
};

// const paths = {
//     blog: 'Блог',
//     cart: 'Корзина',
//     catalog: 'Каталог',
//     delivery: 'Доставка',
//     pay: 'Оплата',
//     faq: 'FAQ',
//     partners: 'Партнерам',
//     vacancies: 'Вакансии',
//     about: "О компании",
//     contacts: "Контакты",
// }

export default Location;
