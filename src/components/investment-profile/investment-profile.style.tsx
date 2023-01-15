import styled from "styled-components";

export const InvestmentProfile = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
`;

export const InvestmentProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InvestmentProfileHeaderText = styled.h4`
  text-transform: capitalize;
`;

export const InvestmentProfileHeaderSelect = styled.select`
  border: 0.5px solid black;
  outline: none;
  border-radius: 3px;
  background: transparent;
  font-size: 14px;
  text-align: center;
  padding: 5px;

  option {
    color: blue !important;
  }
`;

export const InvestmentProfileHeaderSelectOption = styled.option``;
