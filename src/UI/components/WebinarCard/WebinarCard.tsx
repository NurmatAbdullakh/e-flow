import { Avatar } from "antd";
import type React from "react";
import { Link } from "react-router-dom";
import { UserIcon } from "../../../assets/icons";
import styles from "./WebinarCard.module.css";

interface props {
  webinar: {
    title: string;
    category: string;
    image: string;
    author?: string;
    authorImage?: string;
  };
}

export const WebinarCard: React.FC<props> = ({ webinar }) => {
  return (
    <Link to={" "}>
      <div className={styles.card} key={webinar.title}>
        <div className={styles.cardImage}>
          <img src={webinar.image} alt={webinar.title} />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardTitle}>{webinar.title}</div>
          {webinar?.authorImage && webinar?.author && (
            <div className={styles.authorInfo}>
              <Avatar src={webinar.authorImage} icon={<UserIcon />} />
              <div className={styles.cardAuthor}>{webinar.author}</div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
