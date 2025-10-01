import { Typography } from "antd";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../../../assets/icons";
import { Paths } from "../../../router/paths";
import { Button } from "../../components/CustomAntdComponents/Button";
import { AuthHeader } from "../../layouts/AuthLayout/AuthHeader/AuthHeader";

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
    resendLink: {
        textAlign: 'center',
        cursor: 'pointer',
    },
    backLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '16px',
        justifyContent: "center"
    }
});

export const CheckYourEmail = () => {
    const classes = useStyles();

    const handleResend = () => {
        // Logic to resend email
        console.log('Resending email...');
    };

    return (
        <div className={classes.container}>
            <AuthHeader
                logo="/check.svg"
                title="Check your email"
                subtitle="We sent a password reset link to"
                email=" olivia@untitledui.com"
            />

            <div className={classes.actions}>
                <Button type="primary" size="large" block>
                    Open email app
                </Button>
                <Typography.Text
                    className={classes.resendLink}
                    onClick={handleResend}
                >
                    Didn't receive the email? <span className="linkText">Click to resend</span>
                </Typography.Text>
            </div>

            <Link to={Paths.LOGIN} className={classes.backLink}>
                <ArrowLeftIcon />
                <Typography.Text >Back to log in</Typography.Text>
            </Link>
        </div>
    );
};

export default CheckYourEmail;