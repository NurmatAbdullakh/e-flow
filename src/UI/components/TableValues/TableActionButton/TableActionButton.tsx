import { Button, Tooltip } from "antd"
import type { ReactNode } from "react"
import type { ButtonProps } from "antd"
import styles from "./TableActionButton.module.css"

interface TableActionButtonProps extends ButtonProps {
    icon: ReactNode
    title: string
}

export const TableActionButton = ({ icon, title, ...buttonProps }: TableActionButtonProps) => {
    return (
        <Tooltip title={title} >
            <Button className={styles.button} icon={icon} {...buttonProps} />
        </Tooltip>
    )
}