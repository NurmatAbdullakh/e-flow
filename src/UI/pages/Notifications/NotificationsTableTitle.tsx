import { Flex } from 'antd'
import { Link } from 'react-router-dom'
import { Button } from '../../components/CustomAntdComponents/Button'
import { PlusOutlined } from '@ant-design/icons'
import { Paths } from '../../../router/paths'


export const NotificationsTableTitle = () => {
    return (
        <Flex align='center' justify='space-between' gap={8} style={{ padding: "20px 24px" }}>
            Notifications
            <Flex align='center' gap="12px">
                <Link to={Paths.NOTIFICATIONS_CREATE}>
                    <Button size='large' icon={<PlusOutlined />} type='primary'>Create Notification</Button>
                </Link>
            </Flex>
        </Flex>
    )
}