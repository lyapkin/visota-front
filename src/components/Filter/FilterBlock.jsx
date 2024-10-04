"use client";
import React, { useEffect, useRef, useState } from "react";
import Filter from "./Filter";
import { useSelectedLayoutSegments } from "next/navigation";
import { useTranslation } from "react-i18next";

import styles from "../Filter/filter.module.css";

const FilterBlock = () => {
  const { t } = useTranslation();

  const filterWindowRef = useRef(null);
  const filterButtonRef = useRef(null);

  const [isFiltersOpen, setIsFiltersOpen] = useState(
    useSelectedLayoutSegments()[1] ? false : true
  );

  useEffect(() => {
    const handler = (e) => {
      if (
        !filterWindowRef.current.contains(e.target) &&
        !filterButtonRef.current.contains(e.target)
      ) {
        setIsFiltersOpen(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles["filters"]} ${isFiltersOpen && styles["open"]}`}
        ref={filterWindowRef}
      >
        <button
          className={`${styles["filters-popup-close"]} ${
            isFiltersOpen && styles["open"]
          }`}
          onClick={() => setIsFiltersOpen(false)}
        >
          {t("catalog:filters")}
          <img src="/svgs/close-icon.svg" alt="закрыть" />
        </button>
        <Filter setIsFiltersOpen={setIsFiltersOpen} />
      </div>
      <div className={styles["filters-sort-buttons"]} ref={filterButtonRef}>
        <button
          className={styles["filters-toggle"]}
          onClick={() => setIsFiltersOpen((prev) => !prev)}
        >
          <img src="/svgs/filters-toggle-icon.svg" />
          {t("catalog:filters")}
        </button>
      </div>
    </>
  );
};

export default FilterBlock;
