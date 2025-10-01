import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Typography } from "antd";
import type { FC } from "react";
import { createUseStyles } from "react-jss";
import { UploadCloudIcon } from "../../../assets/icons";
import { FormIds, type FormTypeType } from "../../../type";
import { Input } from "../CustomAntdComponents/Input";
import Select from "../CustomAntdComponents/Select";
import Upload from "../CustomAntdComponents/Upload";

const { TextArea } = Input;

interface PersonalInfoFormProps {
  type: FormTypeType;
  onSubmit: (values: {
    fullName: string;
    email: string;
    avatar: string;
    tags: string[];
    role: string;
    note: string;
    password: string;
    repeatPassword: string;
  }) => void;
}

const useStyles = createUseStyles({
  avatarSection: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: 20,
  },
  upload: {
    display: "grid",
    justifyItems: "center",
    gap: "4px",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    "& .anticon": {
      fontSize: 20,
      color: "#bfbfbf",
    },
  },
});

const PersonalInfoForm: FC<PersonalInfoFormProps> = ({ type, onSubmit }) => {
  const classes = useStyles();
  const [form] = Form.useForm();

  const handleSubmit = (values: {
    fullName: string;
    email: string;
    avatar: string;
    tags: string[];
    role: string;
    note: string;
    password: string;
    repeatPassword: string;
  }) => {
    onSubmit(values);
  };

  return (
    <Form
      id={FormIds.PersonalInfo}
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="fullName"
        label="Full Name"
        rules={[{ required: true, message: "Please input your full name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email Address"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="avatar">
        <div className={classes.avatarSection}>
          <div className={classes.avatar}>
            <UserOutlined />
          </div>
          <Upload>
            <div className={classes.upload}>
              <Button
                style={{ marginBottom: "8px" }}
                icon={<UploadCloudIcon />}
              />
              <Typography.Text type="secondary">
                {" "}
                <span className="linkText">Click to upload</span> or drag and
                drop
              </Typography.Text>
              <Typography.Text type="secondary">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </Typography.Text>
            </div>
          </Upload>
        </div>
      </Form.Item>

      <Form.Item name="tags" label="Tags">
        <Select
          mode="multiple"
          placeholder="Select tags"
          style={{ width: "100%" }}
          suffixIcon={<DownOutlined />}
        >
          <Select.Option value="frontend">Frontend</Select.Option>
          <Select.Option value="backend">Backend</Select.Option>
          <Select.Option value="design">Design</Select.Option>
          <Select.Option value="management">Management</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="role"
        label="Role"
        rules={[{ required: true, message: "Please select a role!" }]}
      >
        <Select>
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="user">User</Select.Option>
          <Select.Option value="manager">Manager</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="note" label="Note">
        <TextArea
          maxLength={275}
          showCount={{
            formatter: ({ count, maxLength }) =>
              `${maxLength! - count} characters left`,
          }}
        />
      </Form.Item>

      {type === "create" && (
        <>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="repeatPassword"
            label="Repeat Password"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The two passwords do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </>
      )}
    </Form>
  );
};

export default PersonalInfoForm;
