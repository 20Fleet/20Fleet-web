import {
  FormBox,
  FormContainer,
  FormInputBox,
  FormInputDescription,
  FormTitle,
  TextInput,
} from "./multi-step-form.style";

export const RegisterForm = () => {
  return (
    <FormContainer>
      <FormTitle>User Registration</FormTitle>
      <FormBox>
        <FormInputDescription>Personal Details</FormInputDescription>
        <FormInputBox>
          <TextInput type="text" placeholder="First Name" name="firstname" />
          <TextInput type="text" placeholder="Surname" name="surname" />
        </FormInputBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Phone Number" />
          <TextInput type="email" placeholder="Email Address" name="email" />
        </FormInputBox>
        <TextInput type="text" placeholder="Address" />
      </FormBox>
    </FormContainer>
  );
};
