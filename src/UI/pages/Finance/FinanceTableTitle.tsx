import { Flex } from 'antd'
import { SearchIcon } from '../../../assets/icons'
import { Input } from '../../components/CustomAntdComponents/Input'
import Select from '../../components/CustomAntdComponents/Select'
import { Button } from '../../components/CustomAntdComponents/Button'
import { CloudDownloadOutlined } from '@ant-design/icons'
import styles from "./FinanceTableTitle.module.css"

export const FinanceTableTitle = () => {
    return (
        <Flex gap={"16px"} justify='space-between' align='center' style={{ padding: "20px 24px" }} wrap>
            Payments
            <div className={styles.buttons}>
                <Input size='large' prefix={<SearchIcon />} placeholder='Search' />
                <Select placeholder="Method" />
                <Button size='large' icon={<CloudDownloadOutlined />} >Export</Button>
            </div>
        </Flex>
    )
}