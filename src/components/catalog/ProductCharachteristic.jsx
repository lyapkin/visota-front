import { useParams } from "next/navigation";

import styles from "@/styles/catalog.module.css";

const ProductCharachteristic = ({ c }) => {
  const locale = useParams().locale;
  return (
    <li key={c.id}>
      <span className={styles["caracteristics__key"]}>
        {c.translations[locale].key}
      </span>
      <span className={styles["caracteristics__val"]}>
        {c.translations[locale].value}
      </span>
    </li>
  );
};

export default ProductCharachteristic;
