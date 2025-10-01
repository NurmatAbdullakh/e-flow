import classNames from "classnames";
import styles from "./CategoriesList.module.css";
import type React from "react";

interface props {
  categories: { name: string; id: number }[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  title?: string;
}
export const CategoriesList: React.FC<props> = ({
  categories,
  activeCategory,
  setActiveCategory,
  title = "Article Categories",
}) => {
  return (
    <div className={styles.categories}>
      <div className={styles.categoriesTitle}>{title}</div>
      <ul className={styles.categoriesList}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={classNames(styles.categoriesListItem, {
              [styles.active]: category.name === activeCategory,
            })}
            onClick={() => setActiveCategory(category.name)}
            role="button"
            tabIndex={0}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
