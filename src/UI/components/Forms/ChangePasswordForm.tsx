import { Form } from 'antd';
import { FormIds } from '../../../type';
import { Input } from '../CustomAntdComponents/Input';


interface ChangePasswordFormValues {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}

export const ChangePasswordForm = ({ onSubmit }: { onSubmit: (values: ChangePasswordFormValues) => void }) => {
    const [form] = Form.useForm<ChangePasswordFormValues>();

    const handleSubmit = (values: ChangePasswordFormValues) => {
        onSubmit(values);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            id={FormIds.ChangePassword}
        >
            <Form.Item
                name="oldPassword"
                label="Old Password"
                rules={[
                    { required: true, message: 'Please input your old password!' }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="newPassword"
                label="New Password"
                rules={[
                    { required: true, message: 'Please input your new password!' },
                    { min: 8, message: 'Password must be at least 8 characters!' }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="confirmPassword"
                label="Confirm New Password"
                dependencies={['newPassword']}
                rules={[
                    { required: true, message: 'Please confirm your new password!' },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
        </Form>
    );
};
