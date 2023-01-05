import styled from "styled-components";

export const InvestmentContainer = styled.div`
  height: 90vh;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
`;

export const InvestmentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin-bottom: 30px;
`;

export const InvestmentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #0000b3;
`;

export const InvestmentUnit = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #0000b3;
  padding: 20px 0;
`;

export const InvestmentUnitBox = styled.div`
  width: 200px;
  border: 1px solid #0000b3;
  border-radius: 10px;
  padding: 20px;
  margin: 0 auto;
`;

export const InvestmentUnitBoxText = styled.h2`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
`;

export const SelectBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
`;

export const InvestmentBoxTitle = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  line-height: 0;
`;

export const InvestmentStatus = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const InvestmentCountBox = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #0000b3;
  box-shadow: 0 0 10px 0 #0000b3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InvestmentCountBoxText = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
`;

export const PaymentButton = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: #0000b3;
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  margin: 30px auto 0;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;

export const FootNote = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 0;
`