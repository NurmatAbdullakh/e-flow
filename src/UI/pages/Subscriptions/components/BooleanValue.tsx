import { CheckCircleOutlined, CheckOutlined } from "@ant-design/icons"
import { Dropdown } from "antd"
import classNames from "classnames"
import React, { useState } from "react"
import styles from "./BooleanValue.module.css"

const NoValue = () => {
    return (
        <div className={styles.noValue} >
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M4.91797 10H16.5846" stroke="#A4A7AE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    )
}

const Option = ({ checked, icon, label }: { checked: boolean, icon: React.ReactNode, label: string }) => {
    return (
        <div className={classNames(styles.option, { [styles.checked]: checked })}>
            {icon}
            <div>{label}</div>
            <div className={styles.indicator}><CheckOutlined /></div>
        </div>
    )
}

export const BooleanValue = ({ value, isEditable }: { value: boolean; isEditable: boolean }) => {
    const [checked, setChecked] = useState<boolean>(value)

    const items = [
        {
            key: 'true',
            label: <Option label="Includes" checked={checked} icon={<CheckCircleOutlined className={styles.checkCircle} />} />,
            onClick: () => setChecked(true)
        },
        {
            key: 'false',
            label: <Option
                label="Not to include"
                icon={<NoValue />}
                checked={!checked}
            />,
            onClick: () => setChecked(false)
        }
    ]

    if (isEditable) {
        return (
            <Dropdown menu={{ items }} placement="bottom" trigger={['click']}>
                <div className={classNames(styles.wrapper, { [styles.editable]: isEditable })}>
                    {checked ? <CheckCircleOutlined className={styles.checkCircle} /> : <NoValue />}
                </div>
            </Dropdown>
        )
    }

    return (
        <div className={styles.wrapper}>
            {checked ? <CheckCircleOutlined className={styles.checkCircle} /> : <NoValue />}
        </div>
    )
}

export default BooleanValue