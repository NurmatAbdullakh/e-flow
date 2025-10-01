import type React from "react";
import styles from "./ArticleCard.module.css";
import { Link } from "react-router-dom";

interface props {
  article: {
    title: string;
    category: string;
    image: string;
    readTime: string;
  };
}

export const ArticleCard: React.FC<props> = ({ article }) => {
  return (
    <Link to={" "}>
      <div className={styles.card} key={article.title}>
        <div className={styles.cardImage}>
          <img src={article.image} alt={article.title} />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.tag}>
            <div className={styles.category}>{article.category}</div>
            <div className={styles.readTime}>{article.readTime}</div>
          </div>
          <div className={styles.cardTitle}>{article.title}</div>
        </div>
      </div>
    </Link>
  );
};
