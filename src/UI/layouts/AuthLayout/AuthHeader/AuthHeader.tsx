import { Typography } from "antd"
import styles from "./AuthHeader.module.css"
import type { FC } from "react"
import classNames from "classnames"

interface AuthHeaderProps {
    title: string
    subtitle?: string
    logo?: string
    isSignUp?: Boolean
    email?: string
}

export const AuthHeader: FC<AuthHeaderProps> = ({ title, subtitle, logo = "/Logomark.png", isSignUp, email }) => {
    return <>
        <div className={classNames(styles.authHeader, { [styles.authHeaderSignUp]: isSignUp })}>
            <img src={logo} alt="Logo" className={classNames(styles.authLogo, { [styles.authHeaderSignUp]: isSignUp })} />
            {title &&
                <Typography.Title className={styles.title} level={2}>
                    {title}
                </Typography.Title>
            }
            {subtitle && <Typography.Text className={styles.subtitle} type="secondary">{subtitle}<div>{email}</div></Typography.Text>}
        </div>
    </>
}