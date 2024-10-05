import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./filter.module.css";

const CategoryProperties = ({ properties }) => {
  const searchParams = useSearchParams();

  const path = usePathname();

  const router = useRouter();

  const handleChange = (value) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const filters = new Set(urlSearchParams.getAll("filters"));
    if (filters.has(value)) {
      filters.delete(value);
    } else {
      filters.add(value);
    }
    urlSearchParams.delete("filters");
    filters.forEach((prop) => urlSearchParams.append("filters", prop));
    urlSearchParams.delete("page");
    router.replace(path + "?" + urlSearchParams.toString(), { scroll: false });
  };

  return (
    <div className={styles["category-properties"]}>
      {properties.map((p) => (
        <div key={p.id} className={styles["category-properties__item"]}>
          <label>
            <input
              name={p.slug}
              type="checkbox"
              value={p.name}
              checked={searchParams.getAll("filters").includes(p.slug)}
              onChange={() => handleChange(p.slug)}
              readOnly
            />
            <div
              className={`${styles["filters__checkbox"]} ${
                searchParams.getAll("filters").includes(p.slug) &&
                styles["checked"]
              }`}
            >
              <img src="/svgs/check-icon.svg" alt="иконка" />
            </div>
            <span>{p.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryProperties;
