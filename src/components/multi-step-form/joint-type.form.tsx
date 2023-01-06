import {
  FormContainer,
  FormTitle,
  FormBox,
  FormInputBox,
  TextInput,
} from "./multi-step-form.style";

export const JointType = () => {
  return (
    <FormContainer>
      <FormTitle>Joint Type</FormTitle>
      <FormBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Group Name" />
          <TextInput type="text" placeholder="Type of Group" />
        </FormInputBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Group Registration Number" />
          <TextInput type="text" placeholder="Email Address" />
        </FormInputBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Contact  Name" />
          <TextInput type="text" placeholder="Contact Person Phone Number" />
        </FormInputBox>
        <TextInput type="text" placeholder="Contact Person BVN" />
      </FormBox>
    </FormContainer>
  );
};
