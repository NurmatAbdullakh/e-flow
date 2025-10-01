import { useState } from "react";
import { Input } from "../../../components/CustomAntdComponents/Input";
import Select from "../../../components/CustomAntdComponents/Select";
import styles from "./Plan.module.css";

export const Plan = ({ name, price, period }: { name: string, price: number, period: "monthly" | "yearly" }) => {
    const [mode, setMode] = useState<"read" | "edit">("read")
    const [editPrice, setEditPrice] = useState<number>(price)
    const [editPeriod, setEditPeriod] = useState<"monthly" | "yearly">(period)

    const onEdit = () => {
        setMode("edit")
    }

    const onSave = () => {
        setMode("read")
    }

    const onCancel = () => {
        setMode("read")
    }

    if (mode === "edit")
        return <div>
            <div className={styles.title}>{name}</div>
            <div className={styles.priceInput}>
                <Input
                    type="number"
                    style={{ width: "100%", height: "44px" }}
                    defaultValue={price}
                    className={styles.priceInput}
                    placeholder="Enter price"
                    onChange={(event) => setEditPrice(Number(event.target.value) ?? 0)}
                    value={editPrice}
                />
            </div>
            <div className={styles.periodSelect}>
                <Select
                    style={{ width: "100%", height: "44px" }}
                    defaultValue={period}
                    className={styles.periodSelect}
                    options={[
                        { value: 'monthly', label: 'per month' },
                        { value: 'yearly', label: 'per year' },
                    ]}
                    onChange={(value) => setEditPeriod(value as "monthly" | "yearly")}
                    value={editPeriod}
                />
            </div>
            <button className={styles.modeButton} onClick={onCancel}>
                Cancel
            </button>
            <button className={styles.modeButton} onClick={onSave}>
                Save
            </button>
        </div>



    return <div>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>${price}</div>
        <div className={styles.period}>{period === "monthly" ? "per month" : "per year"}</div>
        <button className={styles.modeButton} onClick={onEdit}>
            Edit
        </button>
    </div>
}

export default Plan