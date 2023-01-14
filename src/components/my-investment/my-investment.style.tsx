import styled from "styled-components";

export const MyInvestmentContainer = styled.div`
    background: #fff;
    padding: 20px;
`;

export const MyInvesmentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MyInvesmentHeaderText = styled.h3`
  color: #000;
  text-transform: capitalize;
  font-size: 16px;
`;

export const MyInvesmentHeaderIcon = styled.button`
  color: #000;
`;

export const MyInvesmentCardList = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const MyInvesmentCard = styled.div`
  width: 220px;
  border: 1px solid blue;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
`;

export const MyInvestmentCardIcon = styled.span`
  background: lightgray;
  border-radius: 3px;
  padding: 10px;
`;

export const MyInvestmentCardInner = styled.div`
  padding: 5px 8px;
  width: 100%;
`;

export const MyInvestmentCardInnerText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

export const MyInvestmentData = styled.h4`
  line-height: 0;
  margin: 5px 0;
  font-size: 14px;
`;

export const MyInvestmentStats = styled.p`
  font-size: 12px;
  margin-bottom: 0;
`;
