import { Divider, Flex } from "antd"
import { PageTitle } from "../../components/PageTitle/PageTitle"
import Plan from "./components/Plan"
import styles from "./index.module.css"
import { HelpCircleIcon } from "../../../assets/icons"
import { useState } from "react"
import { Button } from "../../components/CustomAntdComponents/Button"
import { CheckOutlined } from "@ant-design/icons"
import BooleanValue from "./components/BooleanValue"
import NumberValue from "./components/NumberValue"

interface Plan {
    id: number,
    name: string,
    price: number,
    period: "monthly" | "yearly"
}

const plansData = [
    {
        id: 1,
        name: "Basic",
        price: 9,
        period: "monthly",
    },
    {
        id: 2,
        name: "Pro",
        price: 19,
        period: "monthly",
    },
    {
        id: 3,
        name: "Enterprise",
        price: 29,
        period: "monthly",
    },
    {
        id: 4,
        name: "Enterprise",
        price: 299,
        period: "yearly",
    }
]

function Subscriptions() {
    const [pageMode, setPageMode] = useState<"read" | "edit">("read")

    const OnSaveChangesClick = () => {
        setPageMode("read")
    }

    const onCancel = () => {
        setPageMode("read")
    }

    const onEdit = () => {
        setPageMode("edit")
    }

    const pageTitle = pageMode === "edit" ? "Edit Subscription Plans" : "Subscription Plans"

    return <div>
        <Flex align="center" justify="space-between">
            <PageTitle withoutMb>{pageTitle}</PageTitle>
            {pageMode === "edit" && <Flex gap={16}>
                <Button onClick={onCancel}>Cancel</Button>
                <Button icon={<CheckOutlined />} type="primary" onClick={OnSaveChangesClick}>Save changes</Button>
            </Flex>}
        </Flex>
        <Divider />
        <div className={styles.subscriptionPlans}>
            <div></div>
            {plansData.map((plan) => (
                <Plan
                    name={plan.name}
                    key={plan.id}
                    price={plan.price}
                    period={plan.period as "monthly" | "yearly"}
                />
            ))}
        </div>
        <div className={styles.sections}>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>
                    Shariah Compliance
                </div>
                <div className={styles.sectionRows}>
                    <div className={styles.sectionRow}>
                        <div className={styles.sectionRowTitle}>
                            Stock Halal Status <HelpCircleIcon />
                        </div>
                        <div className={styles.value}>
                            <BooleanValue isEditable={pageMode === "edit"} value={true} />
                        </div>
                        <div className={styles.value}>
                            <BooleanValue isEditable={pageMode === "edit"} value={false} />
                        </div>
                        <div className={styles.value}>
                            <BooleanValue isEditable={pageMode === "edit"} value={true} />
                        </div>
                        <div className={styles.value}>
                            <BooleanValue isEditable={pageMode === "edit"} value={true} />
                        </div>
                    </div>
                    <div className={styles.sectionRow}>
                        <div className={styles.sectionRowTitle}>
                            Stock Detailed Compilance Report <HelpCircleIcon />
                        </div>
                        <div className={styles.value}>
                           <NumberValue isEditable={pageMode === "edit"} value={0} />
                            
                        </div>
                        <div className={styles.value}>
                           <NumberValue isEditable={pageMode === "edit"} value={50} />
                        </div>
                        <div className={styles.value}>
                            <NumberValue isEditable={pageMode === "edit"} value={150} />
                        </div>
                        <div className={styles.value}>
                            <NumberValue isEditable={pageMode === "edit"} value={null} />
                        </div>
                    </div>
                    <div className={styles.sectionRow}>
                        <div className={styles.sectionRowTitle}>
                            Stock Detailed Compilance Report <HelpCircleIcon />
                        </div>
                        <div className={styles.value}>
                            <NumberValue isEditable={pageMode === "edit"} value={0} />
                        </div>
                        <div className={styles.value}>
                            <NumberValue isEditable={pageMode === "edit"} value={50} />
                        </div>
                        <div className={styles.value}>
                            <NumberValue isEditable={pageMode === "edit"} value={150} />
                        </div>
                        <div className={styles.value}>
                            <NumberValue isEditable={pageMode === "edit"} value={null} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {pageMode !== "edit" && <div className={styles.editButtons}>
            <div></div>
            <button className={styles.modeButton} onClick={onEdit}>
                Edit
            </button>
            <button className={styles.modeButton} onClick={onEdit}>
                Edit
            </button>
            <button className={styles.modeButton} onClick={onEdit}>
                Edit
            </button>
            <button className={styles.modeButton} onClick={onEdit}>
                Edit
            </button>
        </div>}
    </div >

}

export default Subscriptions