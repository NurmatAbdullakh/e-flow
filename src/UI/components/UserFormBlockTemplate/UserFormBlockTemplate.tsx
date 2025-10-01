import type React from "react"
import type { FC } from "react"
import type { FormIdsType } from "../../../type"
import { Button } from "../CustomAntdComponents/Button"
import styles from "./UserFormBlockTemplate.module.css"

interface props {
    title: string
    subtitle: string
    form: React.ReactNode
    submitButtonText: string
    SubmitButtonFormId: FormIdsType
}

export const UserFormBlockTemplate: FC<props> = ({ title, subtitle, form, submitButtonText, SubmitButtonFormId }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.formBlock}>
                <div className={styles.formBody}>{form}</div>
                <div className={styles.footer}>
                    <Button size="large">Cancel</Button>
                    <Button
                        type="primary"
                        size="large"
                        form={SubmitButtonFormId}
                        htmlType="submit"
                        onSubmit={(values) => console.log(values)}
                    >
                        {submitButtonText}
                    </Button>
                </div>
            </div>
        </div>

    )
}

