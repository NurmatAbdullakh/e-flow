import { Divider } from "antd";
import styles from "./index.module.css";
import { ProgressBlock } from "./ProgressBlock";
import { CourseContentBlock } from "./CourseContentBlock";


export default function WebinarDetails() {
    return (
        <div className={styles.container}>
            <div className={styles.right}>
                <video className={styles.video} width="640" height="360" controls>
                    <source src="https://www.youtube.com/watch?v=vXZrMhfUJPQ" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <h1 className={styles.title}>The Complete Foundation Stock Trading Course</h1>
                <Divider />
                <h1 className={styles.heading}>About</h1>
                <p className={styles.text}>
                    Mohsen has a deep passion for finance and computer science. Having studied and worked in the field, he has developed a deep understanding of the financial industry's many facets: Long-term investing, shorter-term trading, and automation.
                    Mohsen has started Bloom Trading because of his passion for the financial field and teaching others about the financial markets and programming.
                </p>
                <span className="linkText">Read more</span>
            </div>
            <div className={styles.left}>
                <ProgressBlock />
                <CourseContentBlock />

            </div>
        </div >
    )
}