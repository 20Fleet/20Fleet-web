import {
  FormBox,
  FormContainer,
  FormInputBox,
  FormInputDescription,
  FormTitle,
  TextInput,
} from "./multi-step-form.style";

export const IndividualType = () => {
  return (
    <FormContainer>
      <FormTitle>Individual Type</FormTitle>
      <FormBox>
        <FormInputDescription>Personal Details</FormInputDescription>
        <FormInputBox>
          <TextInput type="text" placeholder="First Name" name="firstname" />
          <TextInput type="text" placeholder="Surname" name="surname" />
        </FormInputBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Last Name" name="lastame" />
          <TextInput type="email" placeholder="Email Address" name="email" />
        </FormInputBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Phone Number" />
          <TextInput type="text" placeholder="Date of Birth" />
        </FormInputBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Occupation" />
          <TextInput type="text" placeholder="Gender" />
        </FormInputBox>
        <FormInputBox>
          <TextInput type="text" placeholder="Mother's Maiden Name" />
          <TextInput type="text" placeholder="NIN" />
        </FormInputBox>
        <TextInput type="text" placeholder="Address" />

        {/* Next of kin */}
        <FormInputDescription>Next of Kin</FormInputDescription>
        <FormInputBox>
          <TextInput type="text" placeholder="Full Name" />
          <TextInput type="text" placeholder="Phone Number" />
        </FormInputBox>
        <TextInput type="text" placeholder="Address" />
      </FormBox>
    </FormContainer>
  );
};
