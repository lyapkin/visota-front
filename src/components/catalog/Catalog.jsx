import styles from "@/styles/catalog.module.css";
import { Suspense } from "react";
import Spinner from "../Spinner/Spinner";
import FilterBlock from "../Filter/FilterBlock";
import Search from "../Search/Search";
import Tags from "./Tags";

const Catalog = ({ children, locale }) => {
  return (
    <div className={styles["catalog"]}>
      <aside className={styles["catalog__filter-block"]}>
        <Suspense fallback={<Spinner />}>
          <FilterBlock />
        </Suspense>
      </aside>
      <aside className={styles["catalog__search"]}>
        <Suspense fallback={<Spinner />}>
          <Search />
        </Suspense>
      </aside>
      {children}
      <aside className={styles["catalog__tags"]}>
        <Tags locale={locale} />
      </aside>
    </div>
  );
};

export default Catalog;
