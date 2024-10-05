import React, { useContext } from "react";
import FilterSection from "./FIlterSection";
import CategoryList from "./CategoryList";
import CategoryProperties from "./CategoryProperties";
import { useTranslation } from "react-i18next";
import { CategoriesContext } from "@/providers/CategoriesProvider";
import { useSelectedLayoutSegments } from "next/navigation";

const FilterCategories = () => {
  const { t } = useTranslation();
  const categories = useContext(CategoriesContext);
  const currentCatSlug = useSelectedLayoutSegments()[1];
  const currentCat = categories
    .reduce((result, c) => [...result, ...c.subcategories], [])
    .find((c) => c.slug === currentCatSlug);

  return (
    <>
      <FilterSection name={t("catalog:categories")}>
        <CategoryList categories={categories} currentCat={currentCatSlug} />
      </FilterSection>
      {currentCat.filters.length > 0 && (
        <FilterSection name={t("catalog:catprops")}>
          <CategoryProperties properties={currentCat.filters} />
        </FilterSection>
      )}
    </>
  );
};

export default FilterCategories;
