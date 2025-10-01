import { Divider, Flex } from 'antd'
import type { ColumnType } from 'antd/es/table'
import { TrashtIcon } from '../../../assets/icons'
import Table from '../../components/CustomAntdComponents/Table'
import { TableActionButton } from '../../components/TableValues/TableActionButton/TableActionButton'
import ChartsBlock from './ChartsBlock'
import { TopBlockPortfolios } from './TopBlockPortfolios'

export default function Portfolios() {
    const columns = [
        {
            title: 'Ticker',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'Company ',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'Sector',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'Country',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'Market Cap',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'P/E',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'Price',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'Change',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'Target Price',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'Analyst Rating',
            key: 'name',
            render: () => "-"
        },
        {
            title: 'Ranking',
            key: 'name',
            render: () => "-"
        },
        {
            fixed: "right",
            key: 'actions',
            render: () => (
                <Flex gap={2} align='center'>
                    <TableActionButton icon={<TrashtIcon />} title='Delete' />
                </Flex>
            ),
        },
    ]

    const mockData = [
        {
            key: '1',
            name: 'John Doe',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            email: 'john@example.com',
            optOut: false,
            purchases: 100.14,
            status: 'no',
            lastLogin: '2025-01-16',
            joined: '2025-01-16',
        },
        {
            key: '1',
            name: 'John Doe',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            email: 'john@example.com',
            optOut: true,
            purchases: 100.14,
            status: 'paid',
            lastLogin: '2025-01-16',
            joined: '2025-01-16',
        },
        {
            key: '1',
            name: 'John Doe',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            email: 'john@example.com',
            optOut: true,
            purchases: 100.14,
            status: 'paid',
            lastLogin: '2025-01-16',
            joined: '2025-01-16',
        },
        {
            key: '1',
            name: 'John Doe',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            email: 'john@example.com',
            optOut: true,
            purchases: 100.14,
            status: 'paid',
            lastLogin: '2025-01-16',
            joined: '2025-01-16',
        },
        {
            key: '1',
            name: 'John Doe',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            email: 'john@example.com',
            optOut: true,
            purchases: 100.14,
            status: 'paid',
            lastLogin: '2025-01-16',
            joined: '2025-01-16',
        },
        {
            key: '1',
            name: 'John Doe',
            avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
            email: 'john@example.com',
            optOut: true,
            purchases: 100.14,
            status: 'paid',
            lastLogin: '2025-01-16',
            joined: '2025-01-16',
        },

    ]

    return (
        <>
            <TopBlockPortfolios />
            <Divider />
            <Table
                bordered
                scroll={{ x: 1600 }}
                columns={columns as ColumnType<typeof mockData[0]>[]}
                dataSource={mockData}
            />
            <ChartsBlock />
        </>
    )
}