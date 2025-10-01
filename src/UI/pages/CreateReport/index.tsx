import { useParams } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { FormType } from "../../../type";
import { Form, Typography } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UploadCloudIcon } from "../../../assets/icons";
import Upload from "../../components/CustomAntdComponents/Upload";
import { Button } from "../../components/CustomAntdComponents/Button";
import Select from "../../components/CustomAntdComponents/Select";
import { Input } from "../../components/CustomAntdComponents/Input";

function CreateReport() {
  const { id } = useParams();
  const isEdit = id != undefined;
  const formType = isEdit ? FormType.edit : FormType.create;
  const PageTitleText =
    formType === FormType.edit ? "Edit Report" : "Create Report";
  const [form] = Form.useForm();

  const onSubmit = (data: {
    title: string;
    author: string;
    stock: string;
    coverImage: string;
    content: string;
  }) => {
    if (id) {
      // update
      console.log("update", data);
    } else {
      // create
      console.log("create", data);
    }
  };

  const normFile = () => {
    // if (Array.isArray(e)) {
    //     return e;
    // }
    // return e?.fileList;
  };

  return (
    <div>
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
          name="coverImage"
          label="Cover Image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload>
            <div
              style={{
                display: "grid",
                justifyItems: "center",
                gap: "4px",
              }}
            >
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {formType === FormType.edit ? "Update" : "Create"} Report
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
export default CreateReport;
