import styles from "@/styles/catalog.module.css";

const ProductCharachteristic = ({ c }) => {
  return (
    <li key={c.id}>
      <span className={styles["caracteristics__key"]}>
        {c.characteristic.name}
      </span>
      <span className={styles["caracteristics__val"]}>
        {c.characteristic_value.name}
      </span>
    </li>
  );
};

export default ProductCharachteristic;
