import { CKEditor } from "@ckeditor/ckeditor5-react";
import { DatePicker, Divider, Flex, Form, TimePicker } from "antd";
import { useParams } from "react-router-dom";
import { FormType } from "../../../type";
import { Button } from "../../components/CustomAntdComponents/Button";
import { Input } from "../../components/CustomAntdComponents/Input";
import Select from "../../components/CustomAntdComponents/Select";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import dayjs from "dayjs";

function Notifications() {
  const { id } = useParams();
  const isEdit = id != undefined;
  const formType = isEdit ? FormType.edit : FormType.create;
  const PageTitleText =
    formType === FormType.edit ? "Edit Notifications" : "Create Notifications";

  const [form] = Form.useForm();

  const onSubmit = (data: {
    title: string;
    author: string;
    stock: string;
    content: string;
    SendDate: dayjs.Dayjs;
    SendTime: dayjs.Dayjs;
  }) => {
    if (id) {
      // update
      console.log("update", data);
    } else {
      // create
      console.log("create", data);
    }
  };

  return (
    <>
      <PageTitle>{PageTitleText}</PageTitle>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          name="title"
          label="Report Title"
          rules={[{ required: true, message: "Please input report title!" }]}
        >
          <Input placeholder="Report title" />
        </Form.Item>

        <Form.Item
          name="author"
          label="Author"
          rules={[{ required: true, message: "Please select author!" }]}
        >
          <Select placeholder="Select author">
            <Select.Option value="salom">salom</Select.Option>
          </Select>
        </Form.Item>
        <Flex justify="space-between" align="center" gap={24}>
          <Form.Item
            style={{ width: "100%", flexGrow: "1" }}
            name="SendDate"
            label="Send Date"
            rules={[{ required: true, message: "Please select Send date!" }]}
          >
            <DatePicker
              placeholder="DD/MM/YYYY"
              style={{ width: "100%", height: "44px" }}
              format="DD/MM/YYYY"
            />
          </Form.Item>

          <Form.Item
            style={{ width: "100%", flexGrow: "1" }}
            name="SendTime"
            label="Send Time"
            rules={[{ required: true, message: "Please select Send time!" }]}
          >
            <TimePicker
              placeholder="HH:MM"
              style={{ width: "100%", height: "44px" }}
              format="HH:mm"
            />
          </Form.Item>
        </Flex>
        <Form.Item
          name="stock"
          label="Related Stock"
          rules={[{ required: true, message: "Please select related stock!" }]}
        >
          <Select placeholder="Related Stock">
            <Select.Option value="salom">salom</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="content"
          label="Report Body"
          rules={[{ required: true, message: "Please input report content!" }]}
        >
          <CKEditor
            /* @ts-ignore */
            editor={ClassicEditor}
            config={{
              placeholder: "Напишите текст отчёта...",
              toolbar: [
                "heading",
                "|",
                "fontfamily",
                "fontsize",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "|",
                "blockQuote",
                "insertTable",
                "undo",
                "redo",
                "mediaEmbed",
                "uploadImage",
              ],
              image: {
                toolbar: [
                  "imageTextAlternative",
                  "imageStyle:inline",
                  "imageStyle:block",
                  "imageStyle:side",
                ],
              },
            }}
            onChange={(_, editor) => {
              const data = editor.getData();
              form.setFieldsValue({ content: data });
            }}
          />
        </Form.Item>
        <Divider />
        <Form.Item>
          <Flex gap={12} justify="end">
            <Button htmlType="submit">Cancel</Button>
            <Button type="primary" htmlType="submit">
              {formType === FormType.edit ? "Save changes" : "Create"}
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </>
  );
}

export default Notifications;
