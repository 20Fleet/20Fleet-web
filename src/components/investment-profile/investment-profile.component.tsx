import { InvestmentPoolHeader } from "../invesment-pool/investment-pool.style";
import {
  InvestmentProfile,
  InvestmentProfileHeader,
  InvestmentProfileHeaderSelect,
  InvestmentProfileHeaderSelectOption,
  InvestmentProfileHeaderText,
} from "./investment-profile.style";
import { Chart } from "react-google-charts";

export const data = [
  ["Months", "Bike"],
  ["Jan", 20570000],
  ["Feb", 17120000],
  ["Mar", 13800000],
  ["Apr", 10350000],
  ["May", 6900000],
  ["Jun", 3450000, 10000000],
  ["Jul", 4906000],
  ["Aug", 5500000],
  ["Sep", 3030000],
  ["Oct", 3300000],
  ["Nov", 5000000],
  ["Dec", 4000000],
];

const options = {
  maxValue: 20570000,
  minValue: 0,
};

export const InvestmentProfileComponent = () => {
  return (
    <InvestmentProfile>
      <InvestmentProfileHeader>
        <InvestmentProfileHeaderText>
          profile summary
        </InvestmentProfileHeaderText>
        <InvestmentProfileHeaderSelect>
          <InvestmentProfileHeaderSelectOption>
            February 2022
          </InvestmentProfileHeaderSelectOption>
        </InvestmentProfileHeaderSelect>
      </InvestmentProfileHeader>
      <Chart
        chartType="ScatterChart"
        width="100%"
        height="200px"
        data={data}
        options={options}
      />
    </InvestmentProfile>
  );
};
