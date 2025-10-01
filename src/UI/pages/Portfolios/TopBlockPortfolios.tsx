import { PageTitle } from "../../components/PageTitle/PageTitle"
import { TrendUpIcon } from "../../../assets/icons"
import Select from "../../components/CustomAntdComponents/Select"
import { Button } from "../../components/CustomAntdComponents/Button"
import { PlusOutlined, ShareAltOutlined } from "@ant-design/icons"
import { useState } from 'react'
import styles from './TopBlockPortfolios.module.css'
import { CreateModal } from "./CreateModal"
import { AddSymbolModal } from "./AddSymbolModal"

export const TopBlockPortfolios = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
    const [isAddSymbolModalOpen, setIsAddSymbolModalOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                <PageTitle withoutMb>My Portfolio</PageTitle>
                <div className={styles.gainInfo}>
                    <div>
                        Today's gain
                    </div>
                    <div className={styles.trendInfo}>
                        <TrendUpIcon />
                        0.51%
                    </div>
                </div>
            </div>
            <div className={styles.rightSection}>
                <Select className={styles.select} size='large' value="My Portfolio 2025" />
                <Button icon={<ShareAltOutlined />} size='large'>Share portfolio</Button>
                <Button
                    icon={<PlusOutlined />}
                    size='large'
                    onClick={() => setIsCreateModalOpen(true)}
                >
                    Create New Portfolio
                </Button>
                <Button
                    icon={<PlusOutlined />}
                    size='large'
                    type='primary'
                    onClick={() => setIsAddSymbolModalOpen(true)}
                >
                    Add Symbol
                </Button>
            </div>
            <CreateModal isCreateModalOpen={isCreateModalOpen} setIsCreateModalOpen={setIsCreateModalOpen} />
            <AddSymbolModal isAddSymbolModalOpen={isAddSymbolModalOpen} setIsAddSymbolModalOpen={setIsAddSymbolModalOpen} />
        </div>
    )
}