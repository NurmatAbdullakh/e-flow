import { PlusOutlined } from "@ant-design/icons";
import { Divider, Flex } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../api/auth/AuthProvider";
import { Paths } from "../../../router/paths";
import { Button } from "../../components/CustomAntdComponents/Button";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { WebinarsGallery } from "./components/WebinarsGallery";
import { WebinarsTable } from "./components/WebinarsTable";
import { CategoryFilter } from "./components/CategoryFilter";
import { webinars, categories } from "./constants";
import styles from "./index.module.css";
import type { Webinar } from "./types";

export default function Webinars() {
  const { user } = useAuth();
  const userRole = user?.role?.name;
  const isSuperAdmin = userRole === "super-admin";
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const handleEdit = (record: Webinar) => {
    console.log("Edit webinar:", record);
    // TODO: Implement edit functionality
  };

  const handleDelete = (record: Webinar) => {
    console.log("Delete webinar:", record);
    // TODO: Implement delete functionality
  };

  const handleView = (record: Webinar) => {
    console.log("View webinar:", record);
    // TODO: Implement view functionality
  };

  const filteredWebinars = webinars.filter(
    (webinar) =>
      activeCategory === "View all" || webinar.category === activeCategory
  );

  return (
    <div>
      <Flex align="center" justify="space-between" className={styles.top}>
        <PageTitle withoutMb>Akinda Webinars</PageTitle>
        {isSuperAdmin && (
          <Link to={Paths.WEBINARS_CREATE}>
            <Button size="large" type="primary" icon={<PlusOutlined />}>
              Add Webinar
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
          <WebinarsTable
            webinars={filteredWebinars}
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
          <WebinarsGallery
            webinars={filteredWebinars}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </>
      )}
    </div>
  );
}
