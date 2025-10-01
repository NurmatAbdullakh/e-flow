import { Input, Modal, Space, Tag } from 'antd'
import { useState } from 'react'
import { Button } from "../../components/CustomAntdComponents/Button"

interface AddSymbolModalProps {
    isAddSymbolModalOpen: boolean;
    setIsAddSymbolModalOpen: (isOpen: boolean) => void;
}

export const AddSymbolModal = ({ isAddSymbolModalOpen, setIsAddSymbolModalOpen }: AddSymbolModalProps) => {
    const [searchValue, setSearchValue] = useState<string>()
    const [selectedStocks, setSelectedStocks] = useState<string[]>([])

    const removeStock = (stock: string) => {
        setSelectedStocks(selectedStocks.filter(s => s !== stock))
    }

    const handleAddSymbols = () => {
        // Handle adding symbols
        setIsAddSymbolModalOpen(false)
        setSelectedStocks([])
    }

    return (
        <Modal
            title="Add Stocks to Follow"
            open={isAddSymbolModalOpen}
            onCancel={() => setIsAddSymbolModalOpen(false)}
            footer={[
                <Button key="cancel" onClick={() => setIsAddSymbolModalOpen(false)}>
                    Cancel
                </Button>,
                <Button key="done" type="primary" onClick={handleAddSymbols}>
                    Done
                </Button>
            ]}
        >
            <p>Please add stocks for portfolio</p>
            <Input
                placeholder="Search stocks"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <Space style={{ marginTop: 16 }} wrap>
                {selectedStocks.map(stock => (
                    <Tag
                        key={stock}
                        closable
                        onClose={() => removeStock(stock)}
                    >
                        {stock}
                    </Tag>
                ))}
            </Space>
        </Modal>
    )
}