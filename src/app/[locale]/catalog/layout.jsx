import CatalogHeader from "@/components/catalog/CatalogHeader";
import FilterBlock from "@/components/Filter/FilterBlock";
import Search from "@/components/Search/Search";
import Spinner from "@/components/Spinner/Spinner";
import styles from "@/styles/catalog.module.css";
import { getStaticPageSEO } from "@/utils/generateMetadataUtil";
import { Suspense } from "react";

const CatalogLayout = async ({ children, params: { locale } }) => {
  // const categories = await getData(locale);

  const data = await getStaticPageSEO("catalog", locale);

  return (
    <div className={`${styles["catalog"]} first-screen`}>
      <div className="container">
        <CatalogHeader data={data} />
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

        <main className={styles["catalog__products"]}>{children}</main>
      </div>
    </div>
  );
};

export default CatalogLayout;

const getData = async (locale) => {
  const response = await fetch(
    process.env.BACK_URL + `/${locale}/api/catalog/categories/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!response.ok) {
    throw new Error(response.status + " запрос не удался");
  }

  return await response.json();
};
