import { Avatar, Flex } from "antd"
import type { FC } from "react"
import styles from "./NameTableValue.module.css"

interface props {
    avatarSrc?: string
    name?: string
    email?: string
}

export const NameTableValue: FC<props> = ({ avatarSrc, name, email }) => {
    return (
        <Flex align="center" gap={12}>
            <Avatar className={styles.avatar} src={avatarSrc} />
            <div>
                <div className={styles.name}>{name}</div>
                <div className={styles.email}>{email}</div>
            </div>
        </Flex>
    )
}