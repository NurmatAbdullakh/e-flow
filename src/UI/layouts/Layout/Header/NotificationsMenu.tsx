import { Badge, Divider, Drawer, Flex, Popover } from "antd";
import { createUseStyles } from "react-jss";
import { BellIcon, MessageCheckSquareIcon } from "../../../../assets/icons";
import { Button } from "../../../components/CustomAntdComponents/Button";
import { InfoCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const useStyles = createUseStyles({
    header: {
        display: "grid",
        gridTemplateColumns: "auto auto 1fr",
        width: "100%",
        alignItems: "center",
        padding: "16px",
        background: "#fff",
        borderBottom: "1px solid #E5E8ED",
        gap: "4px"
    },
    heading: {
        color: '#181D27',
        fontFamily: 'Inter',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '24px',
    },
    badge: {
        borderRadius: '6px',
        border: '1px solid #E9EAEB',
        background: '#FAFAFA',
        display: 'flex',
        padding: '2px 6px',
        alignItems: 'center',
    },
    markAll: {
        color: '#6941C6',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '20px',
        justifySelf: "end",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "4px"
    },

    notificationIcon: {
        fontSize: "20px",
        cursor: "pointer"
    },
    divider: {
        margin: "10px 0px !important"
    },
    notificationList: {},
    notificationCard: {
        maxWidth: "450px",
        display: 'flex',
        padding: '16px',
        alignItems: 'flex-start',
        gap: '16px',
        alignSelf: 'stretch'
    },
    title: {
        color: '#414651',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: '20px'
    },
    desc: {
        color: '#535862',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
    },
    image: {
        marginTop: "4px",
        width: '127px',
        height: '85px',
        aspectRatio: '127/85',
        borderRadius: '8px',
    },
    descDetail: {
        color: '#535862',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '20px',
        marginBottom: "16px"
    },
    imageDetail: {
        marginTop: "4px",
        width: "100%"
    }
});

interface Notification {
    id: string;
    title: string;
    desc: string;
    image?: string;
}

const notificationsData: Notification[] = [
    {
        id: "12341",
        title: "We’ve just released a new feature",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor."
    },
    {
        id: "12341",
        title: "We’ve just released a new feature",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.",
        image: "/Image.png"
    },
    {
        id: "12341",
        title: "We’ve just released a new feature",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor."
    }
]

const NotificationMenuContent = () => {
    const classes = useStyles()
    const [selectedNotification, setSelectedNotification] = useState<Notification>()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return <div>
        <div className={classes.header}>
            <div className={classes.heading}>Notifications</div>
            <div className={classes.badge}>3</div>
            <div className={classes.markAll}>
                <MessageCheckSquareIcon />
                Mark all as read
            </div>
        </div>

        <div className={classes.notificationList}>
            {
                notificationsData.map((notification, index) => {
                    return (
                        <>
                            {!!index && <Divider className={classes.divider} />}
                            <div className={classes.notificationCard} onClick={() => { setSelectedNotification(notification); setIsDrawerOpen(true) }}>
                                <div>
                                    <Button icon={<InfoCircleOutlined className={classes.notificationIcon} />} />
                                </div>
                                <div>
                                    <div className={classes.title}>{notification.title}</div>
                                    <div className={classes.desc}>{notification.desc}</div>
                                    {notification.image && <img src={notification.image} className={classes.image} alt="notification-image" />}
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>

        <Drawer
            title="Notifications"
            placement="right"
            height={500}
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            footer={
                <Flex justify="end">
                    <Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
                </Flex>
            }
        >
            {selectedNotification && (
                <div>
                    <div className={classes.title}>{selectedNotification.title}</div>
                    <div className={classes.descDetail}>{selectedNotification.desc}</div>
                    {selectedNotification.image && <img src={selectedNotification.image} className={classes.imageDetail} alt="notification-image" />}
                </div>
            )}
        </Drawer>
    </div>
}


export const NotificationsMenu = () => {
    const classes = useStyles();

    return (
        <>
            <Popover content={NotificationMenuContent} trigger="click" placement="bottomLeft">
                <Badge count={3} size="small" style={{ background: "#17B26A" }}>
                    <Button icon={<BellIcon className={classes.notificationIcon} />} />
                </Badge>
            </Popover >

        </>
    )
}