import { Form, Typography } from "antd";
import { Paths } from "../../../router/paths";
import { Input } from "../../components/CustomAntdComponents/Input";
import { createUseStyles } from "react-jss";
import { AuthHeader } from "../../layouts/AuthLayout/AuthHeader/AuthHeader";
import { Link } from "react-router-dom";
import { Button } from "../../components/CustomAntdComponents/Button";
import { ArrowLeftIcon } from "../../../assets/icons";

const useStyles = createUseStyles({
    container: {

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
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
    },
    backLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '16px',
        justifyContent: "center",
        "&:hover": {
            textDecoration: "underline"
        }
    }
});

export const ForgotPassword = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <AuthHeader
                logo="/key.svg"
                title="Forgot password?"
                subtitle="No worries, we'll send you reset instructions."
            />
            <Form className={classes.form} layout="vertical">
                <Form.Item
                    required={false}
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' }]}
                >
                    <Input placeholder="Enter your email" size="large" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" block>
                        Reset password
                    </Button>
                </Form.Item>
            </Form>

            <Link to={Paths.LOGIN} className={classes.backLink}>
                <ArrowLeftIcon />
                <Typography.Text>Back to log in</Typography.Text>
            </Link>
        </div>
    );
};

export default ForgotPassword;