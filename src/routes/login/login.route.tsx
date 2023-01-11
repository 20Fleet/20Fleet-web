import { Fragment, useState } from "react";
import { Outlet } from "react-router";
import { signInWithEmailAndPasswordHandler } from "../../utils/firebase.utils";
import {
  LoginContainer,
  LoginWrapper,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  RegisterLink,
  NoAccountText,
} from "./login.style";

const defaultFormValues = {
  email: "",
  password: "",
};

export const Login = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);

  const { email, password } = formValues;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const resetFormFields = () => {
    setFormValues(defaultFormValues);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPasswordHandler(email, password);
      console.log(response);
      resetFormFields();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Fragment>
      <LoginContainer>
        <LoginWrapper>
          <LoginTitle>Log in</LoginTitle>
          <LoginForm autoComplete="false" onSubmit={handleSubmit}>
            <LoginInput
              type="text"
              placeholder="Username"
              autoComplete="none"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <LoginInput
              type="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <LoginButton type="submit">Log in</LoginButton>
          </LoginForm>
          <NoAccountText>
            Don't have an account?{" "}
            <RegisterLink to="/register">Register</RegisterLink>
          </NoAccountText>
        </LoginWrapper>
      </LoginContainer>
      <Outlet />
    </Fragment>
  );
};
