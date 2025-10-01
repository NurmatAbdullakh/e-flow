import { Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../../router/paths";
import { createUseStyles } from "react-jss";
import { AuthHeader } from "../../layouts/AuthLayout/AuthHeader/AuthHeader";
import { Button } from "../../components/CustomAntdComponents/Button";
import { ArrowLeftIcon } from "../../../assets/icons";

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
    },
    logo: {
        height: '32px',
        marginBottom: '8px'
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
    },
    backLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '16px',
        justifyContent: "center"
    }
});

export const PasswordReset = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <AuthHeader
                logo="/check.svg"
                title="Password reset"
                subtitle="Your password has been successfully reset. Click below to log in magically."
            />

            <div className={classes.actions}>
                <Link to={Paths.LOGIN}>
                    <Button type="primary" size="large" block>
                        Continue
                    </Button>
                </Link>
            </div>

            <Link to={Paths.LOGIN} className={classes.backLink}>
                <ArrowLeftIcon />
                <Typography.Text>Back to log in</Typography.Text>
            </Link>
        </div>
    );
};

export default PasswordReset;