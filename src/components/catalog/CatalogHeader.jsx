import initTranslations from "@/locales/i18n";
import styles from "@/styles/catalog.module.css";
import CatalogHeaderCat from "./CatalogHeaderCat";

const CatalogHeader = async ({ params: locale }) => {
  const { t } = await initTranslations(locale, ["catalog"]);
  return (
    <h1 className={styles["catalog__title"]}>
      {t("catalog:catalog")}
      <CatalogHeaderCat />
    </h1>
  );
};

export default CatalogHeader;
