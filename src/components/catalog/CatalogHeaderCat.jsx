"use client";

import { CategoriesContext } from "@/providers/CategoriesProvider";
import { useParams, useSelectedLayoutSegment } from "next/navigation";
import { useContext } from "react";

const CatalogHeaderCat = () => {
  const locale = useParams().locale;
  const categories = useContext(CategoriesContext);
  const currentCat = useSelectedLayoutSegment();
  const content = currentCat
    ? categories
        .reduce((arr, item) => arr.concat(item.subcategories), [])
        .find((item) => item.slug === currentCat)?.translations[locale]?.name
    : null;

  return content && ` - ${content}`;
};

export default CatalogHeaderCat;
