import { useTranslation } from "react-i18next";

import styles from "./filter.module.css";

const HideCategoryListButton = ({
  isCategoriesClosed,
  setIsCategoriesClosed,
}) => {
  const { t } = useTranslation();
  return (
    <button onClick={() => setIsCategoriesClosed((prev) => !prev)}>
      {t("catalog:categories")}
      <span
        className={
          isCategoriesClosed
            ? styles["filters__button-arrow_closed"]
            : styles["filters__button-arrow"]
        }
      ></span>
    </button>
  );
};

export default HideCategoryListButton;
