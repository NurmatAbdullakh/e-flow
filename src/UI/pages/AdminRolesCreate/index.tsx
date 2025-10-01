import { Divider } from "antd";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { UserFormBlockTemplate } from "../../components/UserFormBlockTemplate/UserFormBlockTemplate";
import PersonalInfoForm from "../../components/Forms/PersonalInfoForm";
import { FormIds, FormType } from "../../../type";
import { useParams } from "react-router-dom";
import { ChangePasswordForm } from "../../components/Forms/ChangePasswordForm";

function AdminRolesCreate() {
  const { id } = useParams<{ id: string }>();
  const isEdit = id != undefined;
  const formType = isEdit ? FormType.edit : FormType.create;
  const title = isEdit ? "Admin Details" : "Create New Admin";

  const onSubmit = (data: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) => {
    if (isEdit) {
      console.log("edit", data);
    } else {
      console.log("create", data);
    }
  };

  const onSubmitChangePassword = () => {
    // console.log("change password", data);
  };

  return (
    <div>
      <PageTitle>{title}</PageTitle>
      <UserFormBlockTemplate
        SubmitButtonFormId={FormIds.PersonalInfo}
        title="Personal info"
        subtitle="Update photo and personal details."
        submitButtonText="Save changes"
        form={
          <PersonalInfoForm
            type={formType}
            onSubmit={(data) =>
              onSubmit({
                name: data.fullName,
                email: data.email,
                password: data.password,
                role: data.role,
              })
            }
          />
        }
      />
      <Divider />
      {isEdit && (
        <UserFormBlockTemplate
          SubmitButtonFormId={FormIds.ChangePassword}
          title="Change Password"
          subtitle="Update your protection."
          submitButtonText="Change Password"
          form={<ChangePasswordForm onSubmit={onSubmitChangePassword} />}
        />
      )}
    </div>
  );
}
export default AdminRolesCreate;
