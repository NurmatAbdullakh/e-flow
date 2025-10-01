import { useParams } from "react-router-dom";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { FormType } from "../../../type";
import { Divider, Flex, Form, Typography } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { UploadCloudIcon } from "../../../assets/icons";
import Upload from "../../components/CustomAntdComponents/Upload";
import { Button } from "../../components/CustomAntdComponents/Button";
import Select from "../../components/CustomAntdComponents/Select";
import { Input } from "../../components/CustomAntdComponents/Input";

function CreateWebinar() {
  const { id } = useParams();
  const isEdit = id != undefined;
  const formType = isEdit ? FormType.edit : FormType.create;
  const PageTitleText =
    formType === FormType.edit ? "Edit Webinar" : "Create Webinar";
  const [form] = Form.useForm();

  const onSubmit = (data: {
    title: string;
    link: string;
    categories: string[];
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

  const normFile = (e: { fileList: any }) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <PageTitle>{PageTitleText}</PageTitle>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="link"
          label="Webinar Embed Link"
          rules={[{ required: true, message: "Please input  Link!" }]}
        >
          <Input placeholder="Link" />
        </Form.Item>

        <Form.Item
          name="categories"
          label="Categories"
          rules={[{ required: true, message: "Please select categories!" }]}
        >
          <Select mode="multiple" placeholder="Select categories">
            <Select.Option value="salom">salom</Select.Option>
            <Select.Option value="xayr">xayr</Select.Option>
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
          label="Description"
          rules={[{ required: true, message: "Please input content!" }]}
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
    </div>
  );
}
export default CreateWebinar;
