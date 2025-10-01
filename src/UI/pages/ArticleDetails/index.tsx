import { ArticleCard } from "../../components/ArticleCard/ArticleCard";
import { ArticleContent } from "../../components/ArticleContent/ArticleContent";
import styles from "./index.module.css"


const articles = [
    {
        title: "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
        category: "Strategies",
        image: "/Image.png",
        readTime: "5 min read",
    },
    {
        title: "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
        category: "Fundamentals",
        image: "/Image.png",
        readTime: "5 min read",
    },
    {
        title: "Asia stocks rise as markets weigh stability of the Iran-Israel ceasefire",
        category: "Risk Management",
        image: "/Image.png",
        readTime: "5 min read",
    },
]

export default function ArticleDetails() {

    return (
        <div className={styles.container}>
            <ArticleContent />
            <div className={styles.recommendedSection}>
                <h2 className={styles.recommendedTitle}>Recommended for you</h2>
                <div className={styles.cardGrid}>
                    {
                        articles.map((article) => (
                            <ArticleCard article={article} />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}