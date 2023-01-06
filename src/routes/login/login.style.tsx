import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 70vh;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 40px;
  border-radius: 5px;
`;

export const LoginTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  line-height: 1;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 50px;
  margin: 0 0 15px;
  padding: 0 15px;
  border: none;
  border-bottom: 1px solid #0000b3;
  font-size: 1rem;
  outline: none;
  transition: all 0.4s ease-in-out;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
    inset 0 0 0 100px rgba(255, 255, 255, 1);

  &:focus {
    border-bottom: 1px solid #0000b3;
  }
`;

export const LoginButton = styled.button`
  background-image: linear-gradient(
    96deg,
    #9289f1 0%,
    #6254e7 51%,
    #9289f1 100%
  );
  display: inline-block;
  transition: all 0.4s ease-in-out;
  outline: none;
  width: auto;
  height: 50px;
  cursor: pointer;
  padding: 10px 30px;
  line-height: 23px;
  margin: 20px 0;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  border: none;
  color: #fff;
  border-radius: 5px;
`;

export const NoAccountText = styled.p`
  font-size: .92rem;
  text-align: center;
  line-height: 1.5;
  margin: 0 0 15px;
`;
export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #0000b3;
`;
