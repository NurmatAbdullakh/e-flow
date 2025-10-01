import { Form, Typography } from "antd";
import { Link } from "react-router-dom";
import { Paths } from "../../../router/paths";
import { Button } from "../../components/CustomAntdComponents/Button";
import { Input } from "../../components/CustomAntdComponents/Input";
import styles from './index.module.css';
import { AuthHeader } from "../../layouts/AuthLayout/AuthHeader/AuthHeader";

export const SignUp = () => {
    return (
        <div>
            <div className={styles.authFormContainer}>
                <AuthHeader title="Sign up" logo="/Logomark.png" isSignUp={true} />
                <Form className={styles.authForm} layout="vertical">
                    <Form.Item
                        required={false}
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input
                            placeholder="Enter your name"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        required={false}
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'Please enter a valid email!' }
                        ]}
                    >
                        <Input
                            placeholder="Enter your name"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item
                        required={false}
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            { min: 8, message: 'Password must be at least 8 characters!' }
                        ]}
                        extra="Must be at least 8 characters."
                    >
                        <Input.Password
                            placeholder="Create a password"
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            Get started
                        </Button>
                    </Form.Item>
                </Form>
                <div className={styles.authFooter}>
                    <Typography.Text>Already have an account? </Typography.Text>
                    <Link to={Paths.LOGIN}>
                        <Typography.Text className="linkText">Log in</Typography.Text>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp;