import { InvestmentContainer } from "../../routes/investment/investment.style";
import {
  InvestmentPoolCard,
  InvestmentPoolCardButton,
  InvestmentPoolCardList,
  InvestmentPoolHeader,
  InvestmentPoolHeaderButton,
  InvestmentPoolHeaderText,
} from "./investment-pool.style";

export const InvestmentPoolComponent = () => {
  return (
    <InvestmentContainer>
      <InvestmentPoolHeader>
        <InvestmentPoolHeaderText>overview</InvestmentPoolHeaderText>
        <InvestmentPoolHeaderButton>view all</InvestmentPoolHeaderButton>
      </InvestmentPoolHeader>
      <InvestmentPoolCardList>
        {Array(3).fill(0).map((_item: string, idx: number) => (
          <InvestmentPoolCard key={idx}>
            <InvestmentPoolCardButton>view report</InvestmentPoolCardButton>
          </InvestmentPoolCard>
        ))}
      </InvestmentPoolCardList>
    </InvestmentContainer>
  );
};
