import { Fragment, useState } from "react";
import { Outlet } from "react-router";
import { InvestorType, RegisterForm } from "../../components/multi-step-form";
import {
  FormButton,
  FormButtonContainer,
  RegisterContainer,
  RegisterWrapper,
} from "./register.style";
import { useDispatch } from "react-redux";
import {
  createUserProfileDocument,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import {
  FormTitle,
  FormBox,
  FormInputDescription,
  FormInputBox,
  TextInput,
} from "../../components/multi-step-form/multi-step-form.style";

const defaultFormValues = {
  firstname: "",
  surname: "",
  email: "",
  phone: "",
  address: "",
  password: "",
  confirmPassword: "",
};

export const Register = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);

  const {
    firstname,
    surname,
    email,
    phone,
    address,
    password,
    confirmPassword,
  } = formValues;

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const resetFormFields = () => {
    setFormValues(defaultFormValues);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      const result = await createUserProfileDocument(user, {
        firstname,
        surname,
        phone,
        address,
      });
      resetFormFields();
      console.log(email, password);
      console.log("result", result);
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <Fragment>
      <RegisterContainer>
        <RegisterWrapper>
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
              id="address"
            />
            <FormButtonContainer>
              <FormButton type="submit">Submit Registration</FormButton>
            </FormButtonContainer>
          </FormBox>
        </RegisterWrapper>
      </RegisterContainer>
      <Outlet />
    </Fragment>
  );
};
