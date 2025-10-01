import styles from "./ProgressBlock.module.css"

export const ProgressBlock = () => {
    return (
        <div className={styles.progressBlock}>
            <div className={styles.name}>Progress</div>
            <div className={styles.title}>Treyding Pro</div>
            <div className={styles.progress}>
                <div className={styles.progressBar}>
                    <div className={styles.value} />
                </div>
                10%
            </div>
        </div>
    )
}