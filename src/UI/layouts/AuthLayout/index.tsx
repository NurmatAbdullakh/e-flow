import { Col, Row } from "antd";
import { createUseStyles } from "react-jss";
import { Outlet, useLocation } from "react-router-dom";
import "./index.css";

const useStyles = createUseStyles({
    '@keyframes slideInFade': {
        '0%': {
            opacity: 0,
            transform: 'translateY(30px)'
        },
        '50%': {
            opacity: 0.5,
            transform: 'translateY(15px)'
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)'
        }
    },
    '@keyframes scaleInFade': {
        '0%': {
            opacity: 0,
            transform: 'scale(0.95)'
        },
        '100%': {
            opacity: 1,
            transform: 'scale(1)'
        }
    },
    outletContainer: {
        animation: '$slideInFade 0.6s cubic-bezier(0.16, 1, 0.3, 1), $scaleInFade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        willChange: 'transform, opacity',
        maxWidth: "360px",
        margin: "95px auto 0"
    },
    authLayoutBg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "70%",

        "& img": {
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }
    }
});

export const AuthLayout = () => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <Row className="auth-layout">
            <Col xs={24} lg={12} className="auth-left">
                <div className={classes.authLayoutBg}>
                    <img src="/Background_pattern_decorative.png" />
                </div>
                <div key={location.pathname} className={classes.outletContainer}>
                    <Outlet />
                </div>
            </Col>
            <Col xs={0} lg={12} className="auth-right">
                <div className="auth-image"></div>
            </Col>
        </Row>
    )
}