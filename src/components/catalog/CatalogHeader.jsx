import initTranslations from "@/locales/i18n";
import styles from "@/styles/catalog.module.css";
import CatalogHeaderCat from "./CatalogHeaderCat";
import { getStaticPageSEO } from "@/utils/generateMetadataUtil";

const CatalogHeader = async ({ params: locale }) => {
  const { t } = await initTranslations(locale, ["catalog"]);
  const data = await getStaticPageSEO("catalog", locale);
  return (
    <h1 className={styles["catalog__title"]}>
      {data.translated ? data.header : t("catalog:catalog")}
      <CatalogHeaderCat />
    </h1>
  );
};

export default CatalogHeader;
