import {
  FormBox,
  FormContainer,
  FormInputBox,
  FormTitle,
  TextInput,
} from "./multi-step-form.style";

export const CoperateType = () => {
  return (
    <FormContainer>
      <FormTitle>Coperate Type</FormTitle>
      <FormBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Company's Name" />
          <TextInput type="text" placeholder="Type of Business" />
        </FormInputBox>
        <FormInputBox>
          <TextInput type="text" placeholder="RC Number" />
          <TextInput type="text" placeholder="Email Address" />
        </FormInputBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Contact Person Name" />
          <TextInput type="text" placeholder="Contact Person Phone Number" />
        </FormInputBox>
        <TextInput type="text" placeholder="Office Address" />
      </FormBox>
    </FormContainer>
  );
};
