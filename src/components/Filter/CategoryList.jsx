import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useParams,
  useSearchParams,
  useSelectedLayoutSegment,
} from "next/navigation";
import HideCategoryListButton from "./HideCategoryListButton";
import SubCategory from "./SubCategory";
import HideCategoryItemButton from "./HideCategoryItemButton";

import styles from "./filter.module.css";
import { CategoriesContext } from "@/providers/CategoriesProvider";

const CategoryList = ({ setIsFiltersOpen }) => {
  const locale = useParams().locale;

  const categories = useContext(CategoriesContext);
  const [isCategoriesClosed, setIsCategoriesClosed] = useState(false);
  const [isCategoriesItemClosed, setIsCategoriesItemClosed] = useState(
    categories.reduce((state, cat) => ({ ...state, [cat.id]: true }), {})
  );

  const searchParams = useSearchParams();

  const currentCat = useSelectedLayoutSegment();

  useEffect(() => {
    setIsCategoriesItemClosed((prev) => {
      return categories.reduce((state, cat) => {
        const obj = {
          ...state,
        };
        obj[cat.id] =
          cat.subcategories.find((s) => currentCat === s.slug) ||
          prev[cat.id] === false
            ? false
            : true;
        return obj;
      }, {});
    });
  }, [searchParams]);

  return (
    <div className={styles["filters__categories"]}>
      <HideCategoryListButton
        isCategoriesClosed={isCategoriesClosed}
        setIsCategoriesClosed={setIsCategoriesClosed}
      />
      <div
        className={`${styles["filters__categories-list"]} ${
          isCategoriesClosed && styles["closed"]
        }`}
      >
        {categories.map((cat) => (
          <div key={cat.id} className={styles["filters__categories-item"]}>
            <HideCategoryItemButton
              cat={cat}
              isCategoriesItemClosed={isCategoriesItemClosed}
              setIsCategoriesItemClosed={setIsCategoriesItemClosed}
            />
            <div
              className={`${
                isCategoriesItemClosed[cat.id]
                  ? styles["filters__subcategories-list_closed"]
                  : styles["filters__subcategories-list"]
              }`}
            >
              {cat.subcategories.map(
                (sub) =>
                  locale in sub.translations && (
                    <SubCategory
                      catSlug={cat.slug}
                      sub={sub}
                      setIsFiltersOpen={setIsFiltersOpen}
                      key={cat.id}
                    />
                  )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
