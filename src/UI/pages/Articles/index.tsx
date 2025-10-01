import { PlusOutlined } from "@ant-design/icons";
import { Divider, Flex } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../api/auth/AuthProvider";
import { Paths } from "../../../router/paths";
import { Button } from "../../components/CustomAntdComponents/Button";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { ArticlesGallery } from "./components/ArticlesGallery";
import { ArticlesTable } from "./components/ArticlesTable";
import { CategoryFilter } from "./components/CategoryFilter";
import { articles, categories } from "./constants";
import styles from "./index.module.css";
import type { Article } from "./types";

export default function Articles() {
  const { user } = useAuth();
  const userRole = user?.role?.name;
  const isSuperAdmin = userRole === "super-admin";
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const handleEdit = (record: Article) => {
    console.log("Edit article:", record);
    // TODO: Implement edit functionality
  };

  const handleDelete = (record: Article) => {
    console.log("Delete article:", record);
    // TODO: Implement delete functionality
  };

  const handleView = (record: Article) => {
    console.log("View article:", record);
    // TODO: Implement view functionality
  };

  const filteredArticles = articles.filter(
    (article) =>
      activeCategory === "View all" || article.category === activeCategory
  );

  return (
    <div>
      <Flex align="center" justify="space-between" className={styles.top}>
        <PageTitle withoutMb>Articles</PageTitle>
        {isSuperAdmin && (
          <Link to={Paths.ARTICLES_CREATE}>
            <Button size="large" type="primary" icon={<PlusOutlined />}>
              Add Article
            </Button>
          </Link>
        )}
      </Flex>
      <Divider className={styles.divider} />

      {isSuperAdmin ? (
        <div>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            isSuperAdmin={true}
          />
          <ArticlesTable
            articles={filteredArticles}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        </div>
      ) : (
        <>
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <ArticlesGallery
            articles={filteredArticles}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </>
      )}
    </div>
  );
}
