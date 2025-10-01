import { Divider } from "antd"
import { UserFormBlockTemplate } from "../../components/UserFormBlockTemplate/UserFormBlockTemplate"
import { FormIds } from "../../../type"
import PersonalInfoForm from "../../components/Forms/PersonalInfoForm"
import { ChangePasswordForm } from "../../components/Forms/ChangePasswordForm"

function PersonalInfo() {
    return (
        <div>
            <UserFormBlockTemplate
                SubmitButtonFormId={FormIds.PersonalInfo}
                title="Personal info"
                subtitle="Update photo and personal details."
                submitButtonText="Save changes"
                form={<PersonalInfoForm type="edit" onSubmit={(data) => console.log(data)} />}
            />
            <Divider />
            <UserFormBlockTemplate
                SubmitButtonFormId={FormIds.ChangePassword}
                title="Change Password"
                subtitle="Update your protection."
                submitButtonText="Change Password"
                form={<ChangePasswordForm onSubmit={(data) => console.log(data)} />}
            />
        </div>
    )
}
export default PersonalInfo