import { Outlet } from "react-router-dom";
import { createUseStyles } from "react-jss";
import styles from "./index.module.css"
import classNames from "classnames";

const useStyles = createUseStyles({
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0.8,
            transform: "translateY(20px)",
        },
        "50%": {
            opacity: 0.8,
            transform: "translateY(10px)",
        },
        "100%": {
            opacity: 1,
            transform: "translateY(0)",
        }
    },
    centeredLayoutAnimation: {
        animation: "$fadeIn 0.5s ease-out"
    },
});

export const CenteredLayout = () => {
    const classes = useStyles();

    return (
        <div className={classNames(styles.centeredLayout, classes.centeredLayoutAnimation)}>
            <div className={styles.authLayoutBg}>
                <img src="/Background_pattern_decorative.png" />
            </div>
            <div className={styles.centeredContainer}>
                <Outlet />
            </div>
        </div>
    );
}