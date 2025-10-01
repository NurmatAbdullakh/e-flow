import { PlusOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { Button } from '../../components/CustomAntdComponents/Button'
import { Link } from 'react-router-dom'
import { Paths } from '../../../router/paths'

export const AdminRolesTableTitle = () => {
    return (
        <Flex justify='space-between' align='center' style={{ padding: "20px 24px" }}>
            Admins
            <Flex align='center' gap="12px">
                <Link to={Paths.ADMIN_ROLES_CREATE}>
                    <Button size='large' icon={<PlusOutlined />} type='primary'>Add Admin</Button>
                </Link>
            </Flex>
        </Flex>
    )
}