import { CategoriesList } from "../../../components/CategoriesList/CategoriesList";
import { ArticleCard } from "../../../components/ArticleCard/ArticleCard";
import type { Article, Category } from "../types";
import styles from "../index.module.css";

interface ArticlesGalleryProps {
  articles: Article[];
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ArticlesGallery({
  articles,
  categories,
  activeCategory,
  onCategoryChange,
}: ArticlesGalleryProps) {
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
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </aside>
    </div>
  );
}
