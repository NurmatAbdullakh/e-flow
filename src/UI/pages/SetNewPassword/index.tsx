import { CheckCircleFilled } from "@ant-design/icons";
import { Form, Typography } from "antd";
import classNames from "classnames";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { Color } from "../../../assets/colors";
import { ArrowLeftIcon } from "../../../assets/icons";
import { Paths } from "../../../router/paths";
import { Button } from "../../components/CustomAntdComponents/Button";
import { AuthHeader } from "../../layouts/AuthLayout/AuthHeader/AuthHeader";
import { Input } from "../../components/CustomAntdComponents/Input";

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
    passwordChecks: {
        marginTop: '-16px',
        marginBottom: '8px'
    },
    checkItem: {
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        "&:not(:last-child)": {
            marginBottom: '12px'
        }
    },
    valid: {
        color: Color.brand.solid
    },
    invalid: {
        color: '#D0D5DD'
    },
    checkCircle: {
        fontSize: '20px'
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

export const SetNewPassword = () => {
    const classes = useStyles();
    const [password, setPassword] = useState("");

    const hasMinLength = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className={classes.container}>
            <AuthHeader
                logo="/lock.svg"
                title="Set new password"
                subtitle="Your new password must be different to previously used passwords."
            />

            <Form className={classes.form} layout="vertical">
                <Form.Item
                    required={false}
                    label="Password"
                    name="password"
                    validateTrigger={[]}
                >
                    <Input.Password
                        placeholder="Enter password"
                        size="large"
                        onChange={handlePasswordChange}
                    />
                </Form.Item>

                <div className={classNames(classes.passwordChecks)}>
                    <div className={classNames(classes.checkItem, {
                        [classes.valid]: hasMinLength,
                        [classes.invalid]: !hasMinLength
                    })}>
                        <CheckCircleFilled className={classes.checkCircle} /> Must be at least 8 characters
                    </div>
                    <div className={classNames(classes.checkItem, {
                        [classes.valid]: hasSpecialChar,
                        [classes.invalid]: !hasSpecialChar
                    })}>
                        <CheckCircleFilled className={classes.checkCircle} /> Must contain one special character
                    </div>
                    <div className={classNames(classes.checkItem, {
                        [classes.valid]: hasUpperCase,
                        [classes.invalid]: !hasUpperCase
                    })}>
                        <CheckCircleFilled className={classes.checkCircle} /> Must contain one uppercase letter
                    </div>
                    <div className={classNames(classes.checkItem, {
                        [classes.valid]: hasNumber,
                        [classes.invalid]: !hasNumber
                    })}>
                        <CheckCircleFilled className={classes.checkCircle} /> Must contain one number
                    </div>
                </div>

                <Form.Item
                    required={false}
                    label="Confirm Password"
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm password" size="large" />
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        block
                        disabled={!(hasMinLength && hasSpecialChar && hasUpperCase && hasNumber)}
                    >
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

export default SetNewPassword;