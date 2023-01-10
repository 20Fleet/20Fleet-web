import styled from "styled-components";

// General styles for the form

// Ivestor type
export const FormContainer = styled.div``;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  line-height: 1;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  #address {
    width: auto;
    margin-left: 0;
  }
`;

export const SelectInput = styled.select`
  width: 100%;
  height: 50px;
  padding: 0 24px;
  border: 2px solid #e5e5e5;
  background: transparent;
  border-radius: 5px;
  color: #000000;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const SelectOption = styled.option``;

export const FormInputDescription = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 10px;
`;

export const FormInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 18px;
  border: 2px solid #e5e5e5;
  background: transparent;
  border-radius: 5px;
  color: #000000;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-right: 10px;
`;
