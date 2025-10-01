import Select from "../../../components/CustomAntdComponents/Select";
import styles from "../index.module.css";
import type { Category } from "../types";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isSuperAdmin?: boolean;
}

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
  isSuperAdmin = false,
}: CategoryFilterProps) {
  return (
    <Select
      value={activeCategory}
      onChange={onCategoryChange}
      className={styles.categoriesSelect}
      style={isSuperAdmin ? { marginBottom: "16px" } : {}}
    >
      {categories.map((category) => (
        <Select.Option key={category.id} value={category.name}>
          {category.name}
        </Select.Option>
      ))}
    </Select>
  );
}
