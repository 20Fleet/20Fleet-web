import { UserData } from "../../utils/firebase.utils";
import {
  FormBox,
  FormContainer,
  FormInputBox,
  FormInputDescription,
  FormTitle,
  TextInput,
} from "./multi-step-form.style";

interface RegisterFormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formValues: UserData;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  handleChange,
  formValues,
  handleSubmit,
}) => {
  return (
    <FormContainer>
      <FormTitle>User Registration</FormTitle>
      <FormBox onSubmit={handleSubmit}>
        <FormInputDescription>Personal Details</FormInputDescription>
        <FormInputBox>
          <TextInput
            type="text"
            placeholder="First Name"
            name="firstname"
            value={formValues.firstname}
            onChange={handleChange}
          />
          <TextInput
            type="text"
            placeholder="Surname"
            name="surname"
            value={formValues.surname}
            onChange={handleChange}
          />
        </FormInputBox>
        <FormInputBox>
          <TextInput
            type="text"
            placeholder="Phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          <TextInput
            type="email"
            placeholder="Email Address"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </FormInputBox>
        <FormInputBox>
          <TextInput
            type="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <TextInput
            type="text"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
        </FormInputBox>
        <TextInput
          type="text"
          placeholder="Address"
          name="address"
          value={formValues.address}
          onChange={handleChange}
        />
      </FormBox>
    </FormContainer>
  );
};
