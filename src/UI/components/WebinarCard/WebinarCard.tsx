import type React from "react"
import styles from "./WebinarCard.module.css"
import { Link } from "react-router-dom"
import { PathGenerators } from "../../../router/paths"
import { Avatar } from "antd"
import { UserIcon } from "../../../assets/icons"

interface props {
    webinar: {
        title: string
        category: string
        image: string
        author?: string
        authorImage?: string
    }
}


export const WebinarCard: React.FC<props> = ({ webinar }) => {
    return (
        <Link to={PathGenerators.WEBINAR_DETAIL_ID("1")}>
            <div className={styles.card} key={webinar.title}>
                <div className={styles.cardImage}>
                    <img src={webinar.image} alt={webinar.title} />
                </div>
                <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>{webinar.title}</div>
                    {webinar?.authorImage && webinar?.author && <div className={styles.authorInfo}>
                        <Avatar src={webinar.authorImage} icon={<UserIcon />} />
                        <div className={styles.cardAuthor}>
                            {webinar.author}
                        </div>
                    </div>}
                </div>
            </div>
        </Link>

    )
}