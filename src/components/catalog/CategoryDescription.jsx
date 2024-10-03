import styles from "@/styles/catalog.module.css";

const CategoryDescription = ({ description }) => {
  return (
    <div className={styles["catalog__description"]}>
      <p className={styles["category-description"]}>{description}</p>
    </div>
  );
};

export default CategoryDescription;
