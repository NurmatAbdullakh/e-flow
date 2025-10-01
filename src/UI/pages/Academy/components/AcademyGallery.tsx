import { WebinarCard } from "../../../components/WebinarCard/WebinarCard";
import styles from "../index.module.css";
import type { Category, Course } from "../types";

interface AcademyGalleryProps {
  courses: Course[];
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function AcademyGallery({ courses }: AcademyGalleryProps) {
  return (
    <div className={styles.courses}>
      {courses.map((course) => (
        <WebinarCard key={course.id} webinar={course} />
      ))}
    </div>
  );
}
