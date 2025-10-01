import { Divider } from "antd";
import { PageTitle } from "../../components/PageTitle/PageTitle";
import { UserFormBlockTemplate } from "../../components/UserFormBlockTemplate/UserFormBlockTemplate";
import PersonalInfoForm from "../../components/Forms/PersonalInfoForm";
import { FormIds, FormType } from "../../../type";
import { useParams } from "react-router-dom";
import { ChangePasswordForm } from "../../components/Forms/ChangePasswordForm";

function UsersCreate() {
  const { id } = useParams();
  const isEdit = id != undefined;
  const formType = isEdit ? FormType.edit : FormType.create;
  const PageTitleText =
    formType === FormType.edit ? "User Details" : "Create New User";

  const onSubmit = () => {
    // if (id) {
    //     // update
    //     console.log("update", data);
    // } else {
    //     // create
    //     console.log("create", data)
    // }
  };
  const onSubmitChangePassword = () => {
    // console.log("change password", data)
  };

  return (
    <div>
      <PageTitle>{PageTitleText}</PageTitle>
      <UserFormBlockTemplate
        SubmitButtonFormId={FormIds.PersonalInfo}
        title="Personal info"
        subtitle="Update photo and personal details."
        submitButtonText="Save changes"
        form={<PersonalInfoForm type={formType} onSubmit={onSubmit} />}
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
export default UsersCreate;
