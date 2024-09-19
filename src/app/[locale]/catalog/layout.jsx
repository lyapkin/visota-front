import CatalogHeader from "@/components/catalog/CatalogHeader";
import FilterBlock from "@/components/Filter/FilterBlock";
import Search from "@/components/Search/Search";
import styles from "@/styles/catalog.module.css";

const CatalogLayout = async ({ children, params: { locale } }) => {
  // const categories = await getData(locale);

  return (
    <div className={`${styles["catalog"]} first-screen`}>
      <div className="container">
        <CatalogHeader />
        <aside className={styles["catalog__filter-block"]}>
          <FilterBlock />
        </aside>
        <aside className={styles["catalog__search"]}>
          <Search />
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
