import Link from "next/link";
import { useParams, useSelectedLayoutSegments } from "next/navigation";

import styles from "./filter.module.css";

const SubCategory = ({ catSlug, sub, setIsFiltersOpen }) => {
  const locale = useParams().locale;
  const currentCat = useSelectedLayoutSegments()[1];

  return (
    <div key={sub.id} className={styles["subcategories__item"]}>
      <Link
        href={"/catalog/" + sub.slug}
        scroll={false}
        onClick={() => setIsFiltersOpen(false)}
      >
        <label>
          <input
            name={catSlug}
            type="checkbox"
            value={sub.slug}
            checked={sub.slug == currentCat}
            readOnly
          />
          <div
            className={`${styles["filters__checkbox"]} ${
              sub.slug === currentCat && styles["checked"]
            }`}
          >
            <img src="/svgs/check-icon.svg" alt="иконка" />
          </div>
          <span>{sub.translations[locale].name}</span>
        </label>
      </Link>
    </div>
  );
};

export default SubCategory;
