import { Checkbox, Form, Row, Typography } from "antd";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { useAuth } from "../../../api/auth/AuthProvider";
import { Color } from "../../../assets/colors";
import { Paths } from "../../../router/paths";
import { Button } from "../../components/CustomAntdComponents/Button";
import { Input } from "../../components/CustomAntdComponents/Input";
import { AuthHeader } from "../../layouts/AuthLayout/AuthHeader/AuthHeader";
import styles from './index.module.css';

const useStyles = createUseStyles({
    secondaryText: {
        color: Color.text.tertiary[600],
    }
})

function Login() {
    const { login } = useAuth()
    const classes = useStyles();

    const onFinish = (values: { email: string; password: string }) => {
        login(values.email, values.password)
    };

    // const onFinish = (values: { email: string; password: string }) => {
    //     api.post("/users", { title: "salom" })
    // };

    // const onFinish = (values: { email: string; password: string }) => {
    //     api.get("/delivery-routes/ap4E_oREZ88Z6P9C5tv8N9jktCgHXrwi4ZMD56egReI")
    // };

    return (
        <div>
            <div className={styles.authFormContainer}>
                <AuthHeader title="Welcome Back" subtitle="Welcome back! Please enter your details." logo="/Logomark.png" />
                <Form
                    className={styles.authForm}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        required={false}
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }, { type: 'email', message: 'Please enter a valid email!' },]}
                    >
                        <Input placeholder="Enter your email" size="large" />
                    </Form.Item>
                    <Form.Item
                        required={false}
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Enter your password" size="large" />
                    </Form.Item>

                    <Form.Item>
                        <Row justify="space-between" align="middle">
                            <Checkbox>Remember for 30 days</Checkbox>
                            <Link to={Paths.FORGOT_PASSWORD} >
                                <Typography.Text className="linkText">Forgot password?</Typography.Text>
                            </Link>
                        </Row>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
                <div className={styles.authFooter}>
                    <Typography.Text className={classes.secondaryText}>Don't have an account? </Typography.Text>
                    <Link to={Paths.SIGN_UP}>
                        <Typography.Text className="linkText">Sign up</Typography.Text>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login