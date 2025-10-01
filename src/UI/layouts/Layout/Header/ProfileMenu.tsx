import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Flex, Popover } from "antd";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { Color } from "../../../../assets/colors";
import { BellIcon, BookOpenIcon, BriefCaseIcon, CheckVerifiedIcon, HelpCircleIcon, LogoutIcon, UserIcon } from "../../../../assets/icons";
import { Paths } from "../../../../router/paths";
import { useAuth } from "../../../../api/auth/AuthProvider";

const useStyles = createUseStyles({
    myPopover: {

    },
    avatar: {
        cursor: "pointer",
        width: "40px",
        height: "40px"
    },
    menuItem: {
        display: "block",
        padding: "8px",
        minWidth: "244px",
        transition: "0.2s",
        borderRadius: "8px",
        "&:not(:last-child)": {
            marginBottom: "2px"
        }
    },
    activeMenuItem: {
        background: "#f5f5f5"
    },
    label: {
        color: Color.text.secondary[700],
        fontWeight: 600,
    },
    divider: {
        margin: "10px 0px !important"
    }
});

const links = [
    {
        icon: <UserIcon />,
        label: "Personal info",
        path: Paths.PERSONAL_INFO
    },
    {
        icon: <CheckVerifiedIcon />,
        label: "My subscription",
        path: Paths.SUBSCRIPTIONS
    },
    {
        icon: <BellIcon />,
        label: "Notification settings",
        path: Paths.NOTIFICATIONS_SETTINGS
    },
    {
        icon: <HelpCircleIcon />,
        label: "My Tickets",
        path: Paths.SUPPORT_TICKETS
    },
    {
        icon: <BookOpenIcon />,
        label: "My Courses",
        path: Paths.ACADEMY,
    },
    {
        icon: <BriefCaseIcon />,
        label: "My Portfolio",
        path: Paths.PORTFOLIOS
    },
]

const ProgileMenuContent = () => {
    const { logout } = useAuth()
    const classes = useStyles()
    return <div>
        {
            links.slice(0, 4).map(link => {
                return (
                    <NavLink to={link.path} className={({ isActive }) => classNames(classes["menuItem"], { [classes.activeMenuItem]: isActive })}>
                        <Flex align="center" gap={8}>
                            {link.icon}
                            <div className={classes.label}>{link.label}</div>
                        </Flex>
                    </NavLink>
                )
            })
        }
        <Divider className={classes.divider} />
        {
            links.slice(4).map(link => {
                return (
                    <NavLink to={link.path} className={({ isActive }) => classNames(classes["menuItem"], { [classes.activeMenuItem]: isActive })}>
                        <Flex align="center" gap={8}>
                            {link.icon}
                            <div className={classes.label}>{link.label}</div>
                        </Flex>
                    </NavLink>
                )
            })
        }
        <a onClick={logout}>
            <Flex align="center" gap={8}>
                <LogoutIcon />
                <div className={classes.label}>Sign out</div>
            </Flex>
        </a>

    </div>
}


export const ProfileMenu = () => {
    const classes = useStyles();

    return (
        <Popover className={classes.myPopover} content={ProgileMenuContent} trigger="click" placement="bottomLeft">
            <Avatar
                icon={<UserOutlined />}
                className={classes.avatar}
            />
        </Popover>
    )
}