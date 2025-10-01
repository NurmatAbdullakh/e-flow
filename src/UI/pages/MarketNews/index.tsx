import { Divider, Flex } from "antd";
import { useState } from "react";
import { ArticleCard } from "../../components/ArticleCard/ArticleCard";
import { CategoriesList } from "../../components/CategoriesList/CategoriesList";
import Select from "../../components/CustomAntdComponents/Select";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import styles from "./index.module.css";

const categories = [
  {
    id: 1,
    name: "View all",
  },
  {
    id: 2,
    name: "Finance Fundamentals",
  },
  {
    id: 3,
    name: "Stock Screening",
  },
  {
    id: 4,
    name: "Strategies",
  },
  {
    id: 5,
    name: "Instruments",
  },
  {
    id: 6,
    name: "Risk Management",
  },
  {
    id: 7,
    name: "Case Studies",
  },
];

const articles = [
  {
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Strategies",
    image: "/Image.png",
    readTime: "5 min read",
  },
  {
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Fundamentals",
    image: "/Image.png",
    readTime: "5 min read",
  },
  {
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Risk Management",
    image: "/Image.png",
    readTime: "5 min read",
  },
  {
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Instruments",
    image: "/Image.png",
    readTime: "5 min read",
  },
  {
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Strategies",
    image: "/Image.png",
    readTime: "5 min read",
  },
  {
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Fundamentals",
    image: "/Image.png",
    readTime: "5 min read",
  },
  {
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Risk Management",
    image: "/Image.png",
    readTime: "5 min read",
  },
  {
    title:
      "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
    category: "Instruments",
    image: "/Image.png",
    readTime: "5 min read",
  },
];

export default function Articles() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <div>
      <Flex align="center" justify="space-between" className={styles.top}>
        <PageTitle withoutMb>Market News</PageTitle>
      </Flex>
      <Divider className={styles.divider} />
      <Select
        value={activeCategory}
        onChange={(value) => {
          setActiveCategory(value);
        }}
        className={styles.categoriesSelect}
      >
        {categories.map((categorie) => (
          <Select.Option value={categorie.name}>{categorie.name}</Select.Option>
        ))}
      </Select>
      <div className={styles.body}>
        <aside className={styles.left}>
          <CategoriesList
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            title="News Categories"
          />
        </aside>

        <aside className={styles.right}>
          <div className={styles.cards}>
            {articles
              .filter(
                (article) =>
                  activeCategory === "View all" ||
                  article.category === activeCategory
              )
              .map((article) => (
                <ArticleCard article={article} />
              ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
