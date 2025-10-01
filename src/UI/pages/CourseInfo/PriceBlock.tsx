import { Button } from "../../components/CustomAntdComponents/Button"
import styles from "./PriceBlock.module.css"

export const PriceBlock = () => {
    return (

        <div className={styles.priceBlock}>
            <img className={styles.image} src="/Image.png" alt="image" />
            <div className={styles.body}>
                <div className={styles.title}>Subscribe to Udemy’s top courses</div>
                <div className={styles.description}>Get this course, plus 26,000+ of our top-rated courses, with Personal Plan.</div>
                <div className={styles.price}>
                    $94.99
                </div>
                <Button className={styles.button} type="primary" size="large">Buy Now</Button>
                <div className={styles.note}>
                    30-Day Money-Back Guarantee Full Lifetime Access
                </div>
            </div>
        </div>
    )
}