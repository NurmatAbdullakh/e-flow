import { CategoriesList } from "../../../components/CategoriesList/CategoriesList";
import { WebinarCard } from "../../../components/WebinarCard/WebinarCard";
import type { Webinar, Category } from "../types";
import styles from "../index.module.css";

interface WebinarsGalleryProps {
  webinars: Webinar[];
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function WebinarsGallery({
  webinars,
  categories,
  activeCategory,
  onCategoryChange,
}: WebinarsGalleryProps) {
  return (
    <div className={styles.body}>
      <aside className={styles.left}>
        <CategoriesList
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={onCategoryChange}
        />
      </aside>

      <aside className={styles.right}>
        <div className={styles.cards}>
          {webinars.map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </div>
      </aside>
    </div>
  );
}
