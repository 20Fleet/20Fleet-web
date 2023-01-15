import styled from "styled-components";

export const InvestmentPoolContainer = styled.div``;

export const InvestmentPoolHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InvestmentPoolHeaderText = styled.h3`
  color: #000;
  text-transform: capitalize;
  font-size: 16px;
`;

export const InvestmentPoolHeaderButton = styled.span`
  color: blue;
  cursor: pointer;
  text-transform: capitalize;
`;

export const InvestmentPoolCardList = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
`;

export const InvestmentPoolCard = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid gray;
  border-radius: 5px;
  padding: 10px;
`;

export const InvestmentPoolCardButton = styled.button`
  width: 100%;
  background: #fff;
  color: #000;
  text-align: center;
  text-transform: capitalize;
  cursor: pointer;
  padding: 10px;
  border: none;
  outline: none;
`;
