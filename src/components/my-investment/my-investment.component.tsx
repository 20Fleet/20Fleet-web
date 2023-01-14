import {
  MyInvesmentCard,
  MyInvesmentCardList,
  MyInvesmentHeader,
  MyInvesmentHeaderIcon,
  MyInvesmentHeaderText,
  MyInvestmentCardIcon,
  MyInvestmentCardInner,
  MyInvestmentCardInnerText,
  MyInvestmentContainer,
  MyInvestmentData,
  MyInvestmentStats,
} from "./my-investment.style";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";

export const MyInvestment = () => {
  return (
    <MyInvestmentContainer>
      <MyInvesmentHeader>
        <MyInvesmentHeaderText>my investment</MyInvesmentHeaderText>
        <MyInvesmentHeaderIcon>
          <BiDotsHorizontalRounded />
        </MyInvesmentHeaderIcon>{" "}
      </MyInvesmentHeader>
      <MyInvesmentCardList>
        {Array(3)
          .fill(0)
          .map((_item: string, idx: number) => (
            <MyInvesmentCard key={idx}>
              <MyInvestmentCardIcon>
                <AiFillEye />
              </MyInvestmentCardIcon>
              <MyInvestmentCardInner>
                <MyInvestmentCardInnerText>
                  <MyInvestmentData>Investment</MyInvestmentData>
                  <MyInvestmentData>58,000.00</MyInvestmentData>
                </MyInvestmentCardInnerText>
                <MyInvestmentCardInnerText>
                  <MyInvestmentStats>10% Returns</MyInvestmentStats>
                  <MyInvestmentStats>Aug 2023</MyInvestmentStats>
                </MyInvestmentCardInnerText>
              </MyInvestmentCardInner>
            </MyInvesmentCard>
          ))}
      </MyInvesmentCardList>
    </MyInvestmentContainer>
  );
};
