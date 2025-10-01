import { Badge } from "antd"
import styles from './StatusTagTableValue.module.css'

interface StatusTagTableValueProps {
    isActive: boolean;
    activeText?: string;
    inactiveText?: string;
}

export const StatusTagTableValue = ({ isActive, activeText, inactiveText }: StatusTagTableValueProps) => {
    return (
        <div className={styles.statusTag}>
            <Badge color={isActive ? "green" : "gray"} />
            <div className={styles.text}>
                {isActive ? activeText || 'Active' : inactiveText || 'Inactive'}
            </div>
        </div>
    )
}