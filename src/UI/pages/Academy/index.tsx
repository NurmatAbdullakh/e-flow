import { PlusOutlined } from "@ant-design/icons";
import { Divider, Flex } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../api/auth/AuthProvider";
import { Paths } from "../../../router/paths";
import { Button } from "../../components/CustomAntdComponents/Button";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { AcademyGallery } from "./components/AcademyGallery";
import { AcademyTable } from "./components/AcademyTable";
import { CategoryFilter } from "./components/CategoryFilter";
import { courses, categories } from "./constants";
import styles from "./index.module.css";
import type { Course } from "./types";

export default function Academy() {
  const { user } = useAuth();
  const userRole = user?.role?.name;
  const isSuperAdmin = userRole === "super-admin";
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const handleEdit = (record: Course) => {
    console.log("Edit course:", record);
    // TODO: Implement edit functionality
  };

  const handleDelete = (record: Course) => {
    console.log("Delete course:", record);
    // TODO: Implement delete functionality
  };

  const handleView = (record: Course) => {
    console.log("View course:", record);
    // TODO: Implement view functionality
  };

  const filteredCourses = courses.filter(
    (course) =>
      activeCategory === "View all" || course.category === activeCategory
  );

  return (
    <div>
      <Flex align="center" justify="space-between" className={styles.top}>
        <PageTitle withoutMb>My Courses</PageTitle>
        {isSuperAdmin && (
          <Link to={Paths.COURSES_CREATE}>
            <Button size="large" type="primary" icon={<PlusOutlined />}>
              Add Course
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
          <AcademyTable
            courses={filteredCourses}
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
          <AcademyGallery
            courses={filteredCourses}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </>
      )}
    </div>
  );
}
