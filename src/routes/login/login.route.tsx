import { Fragment } from "react";
import { Outlet } from "react-router";
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

export const Login = () => {
  return (
    <Fragment>
      <LoginContainer>
        <LoginWrapper>
          <LoginTitle>Log in</LoginTitle>
          <LoginForm autoComplete="false">
            <LoginInput
              type="text"
              placeholder="Username"
              autoComplete="none"
            />
            <LoginInput
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
            <LoginButton>Log in</LoginButton>
          </LoginForm>
          <NoAccountText>
            Don't have an account? <RegisterLink to='/register'>
              Register
            </RegisterLink>
          </NoAccountText>
        </LoginWrapper>
      </LoginContainer>
      <Outlet />
    </Fragment>
  );
};
