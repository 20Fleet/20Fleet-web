import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;

  &:checked {
    background-color: #0000b3;
  }
`;
