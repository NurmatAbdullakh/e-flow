import { Typography, Divider, Space } from 'antd';
import { createUseStyles } from 'react-jss';
import Switch from '../../components/CustomAntdComponents/Switch';

const { Title, Text } = Typography;

const useStyles = createUseStyles({
    container: {
        padding: '24px',
    },
    settingItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: '16px 0',
        maxWidth: '500px',
        gap: "5px"
    },
    settingInfo: {
        flex: 1,
        maxWidth: "280px"
    },
    switchGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    switchLabel: {
        minWidth: '60px',
        textAlign: 'center',
    },
});

const NotificationSettings = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Title level={4}>Notification Settings</Title>
            <Text type="secondary">
                We may still send you important notifications about your account outside of your notification settings.
            </Text>

            <Divider />

            <div className={classes.settingItem}>
                <div className={classes.settingInfo}>
                    <Text strong>My portfolio halal status update</Text>
                    <div>
                        <Text type="secondary">
                            Receive alerts when the halal status of any stock in your portfolio changes.
                        </Text>
                    </div>
                </div>

                <Space className={classes.switchGroup}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Push</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Email</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">SMS</Text>
                    </div>
                </Space>
            </div>
            <Divider />

            <div className={classes.settingItem}>
                <div className={classes.settingInfo}>
                    <Text strong>My course updates</Text>
                    <div>
                        <Text type="secondary">
                            Stay informed about new lessons, deadlines, or changes in your enrolled courses.
                        </Text>
                    </div>
                </div>

                <Space className={classes.switchGroup}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Push</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Email</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">SMS</Text>
                    </div>
                </Space>
            </div>
            <Divider />

            <div className={classes.settingItem}>
                <div className={classes.settingInfo}>
                    <Text strong>My portfolio signal update</Text>
                    <div>
                        <Text type="secondary">
                            Get notified when technical or market signals affect the assets in your portfolio.
                        </Text>
                    </div>
                </div>

                <Space className={classes.switchGroup}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Push</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Email</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">SMS</Text>
                    </div>
                </Space>
            </div>
            <Divider />

            <div className={classes.settingItem}>
                <div className={classes.settingInfo}>
                    <Text strong>My ticket update</Text>
                    <div>
                        <Text type="secondary">
                            Track the status of your submitted tickets and get real-time updates.
                        </Text>
                    </div>
                </div>

                <Space className={classes.switchGroup}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Push</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Email</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">SMS</Text>
                    </div>
                </Space>
            </div>
            <Divider />

            <div className={classes.settingItem}>
                <div className={classes.settingInfo}>
                    <Text strong>My stock analyst/rating update</Text>
                    <div>
                        <Text type="secondary">
                            Be the first to know when analysts change their ratings or forecasts on your followed stocks.
                        </Text>
                    </div>
                </div>

                <Space className={classes.switchGroup}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Push</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Email</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">SMS</Text>
                    </div>
                </Space>
            </div>
            <Divider />

            <div className={classes.settingItem}>
                <div className={classes.settingInfo}>
                    <Text strong>Webinar notification</Text>
                    <div>
                        <Text type="secondary">
                            Get reminders about upcoming webinars and never miss an important session.
                        </Text>
                    </div>
                </div>

                <Space className={classes.switchGroup}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Push</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Email</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">SMS</Text>
                    </div>
                </Space>
            </div>
            <Divider />

            <div className={classes.settingItem}>
                <div className={classes.settingInfo}>
                    <Text strong>Marketing emails</Text>
                    <div>
                        <Text type="secondary">
                            Receive product news, promotions, and special offers straight to your inbox.
                        </Text>
                    </div>
                </div>

                <Space className={classes.switchGroup}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Push</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">Email</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Switch size="small" />
                        <Text type="secondary">SMS</Text>
                    </div>
                </Space>
            </div>
        </div>
    );
};

export default NotificationSettings;
