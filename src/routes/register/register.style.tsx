import styled from "styled-components";

export const RegisterContainer = styled.div`
  height: 80vh;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RegisterWrapper = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  width: 400px;
  padding: 20px 40px;
  border-radius: 5px;
`;

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const FormButton = styled.button`
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
  padding: 0 24px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  float: none;

  &:hover {
    background-image: linear-gradient(
      96deg,
      #9289f1 0%,
      #6254e7 51%,
      #9289f1 100%
    );
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;
