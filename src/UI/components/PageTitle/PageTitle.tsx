import type React from "react"
import styles from "./PageTitle.module.css"

export const PageTitle = ({ children, withoutMb }: { children: React.ReactNode, withoutMb?: boolean }) => {
    return <h1 className={styles.pageTitle} style={{ marginBottom: withoutMb ? 0 : "32px" }}>{children}</h1>
}