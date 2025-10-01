import { Flex } from "antd"
import styles from "./FinanceStatisticCard.module.css"
import { ArrowDownRight, ArrowUpRight } from "../../../../assets/icons"

export const FinanceStatisticCard = ({ title, amount, tag, tagText }: { title: string, amount: string, tag: "up" | "down", tagText: string }) => {
    return <div className={styles.card}>
        <div className={styles.title}>{title}</div>
        <Flex align="end" gap={"16px"}>
            <div className={styles.amount}>{amount}</div>
            <div className={styles.tag}>
                {tag === "up" ? <ArrowUpRight /> : <ArrowDownRight />}
                {tagText}
            </div>
        </Flex>
    </div>
}