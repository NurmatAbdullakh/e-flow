import { CopyIcon } from "../../../assets/icons"
import { Button } from "../CustomAntdComponents/Button"
import styles from "./ArticleContent.module.css"

export const ArticleContent = () => {
    return (
        <article>
            <header className={styles.header}>
                <ul className={styles.categories}>
                    <li className={styles.category}>Finance Fundamentals</li>
                    <li className={styles.category}>Tools</li>
                    <li className={styles.category}>Risk Management</li>
                </ul>
                <h1 className={styles.title}>Klarna's neobank pivot: Another IPO attempt in sight?</h1>
                <ul className={styles.breadcrumb}>
                    <li className={styles.breadItem}>Jun 30, 2025 6:25 AM</li>
                    •
                    <li className={styles.breadItem}>Nurmuhammad Ismoilov</li>
                    •
                    <li className={styles.breadItem}>Stock: <span className={styles.light}>KLAR</span></li>
                </ul>
            </header>
            <img className={styles.cover} src="/Image.png" />
            <h3 className={styles.heading}>Introduction</h3>
            <p className={styles.text}>
                Klarna (KLAR) is steadily diversifying away from being a pure "buy now, pay later" player, launching products over the past month to establish itself as a neobank (or digital bank) ahead of a potential second attempt at going public.
                The Swedish firm will launch an unlimited mobile plan in the U.S. in the coming weeks, with coverage on the AT&T (T) network. Klarna (KLAR) also unveiled a new debit card in partnership with Visa (V), which is currently in a trial phase in the U.S.
                The new offerings follow Klarna's (KLAR) decision in April to pause its U.S. IPO plans amid the stock market turmoil fueled by President Trump's "Liberation Day" tariffs.
                However, U.S. firm Chime Financial's (CHYM) stock market debut this month has renewed optimism in the fintech sector.
                "Klarna (KLAR) would have been keeping a close eye on Chime's IPO success," Liam Evans, managing director at PwC, told the Financial Times. He added that diversifying its offerings was a logical way for Klarna to revive its appeal to investors.
                The company's active consumer base grew to 100M at the end of Q1, but its quarterly net loss more than doubled to $99M from a year ago. Consumer credit losses in Q1 totaled $136M, up 17% Y/Y.
            </p>
            <footer className={styles.footer}>
                <div className={styles.buttons}>
                    <Button icon={<CopyIcon />}>Copy link</Button>
                </div>
            </footer>
        </article>
    )
}