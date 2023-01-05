import React from "react";
import { Fragment } from "react";
import { Outlet } from "react-router";
import { Checkbox } from "../../components/checkbox/checkbox.component";
import {
  InvestmentBox,
  InvestmentCountBox,
  InvestmentCountBoxText,
  InvestmentBoxTitle,
  InvestmentContainer,
  InvestmentStatus,
  InvestmentUnit,
  InvestmentWrapper,
  InvestmentUnitBox,
  SelectBox,
  InvestmentUnitBoxText,
  PaymentButton,
  FootNote,
} from "./investment.style";

export const Investment = () => {
  const [unit, setUnit] = React.useState(0);
  const [checkedList, setCheckedList] = React.useState<number[]>([]);

  const onCheckItem =
    (item: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      if (checked) {
        setCheckedList([...checkedList, item]);
        setUnit(unit + 1);
      } else {
        setCheckedList(checkedList.filter((i: number) => i !== item));
        setUnit(unit - 1);
      }
    };

  return (
    <Fragment>
      <InvestmentContainer>
        <InvestmentWrapper>
          <InvestmentBox>
            <InvestmentBoxTitle>Ongoing Investment</InvestmentBoxTitle>
            <InvestmentStatus>Invesment closes in 30 days</InvestmentStatus>
            <InvestmentCountBox>
              <InvestmentCountBoxText>
                {unit} of 20 investment
              </InvestmentCountBoxText>
            </InvestmentCountBox>
          </InvestmentBox>
          <InvestmentUnit>
            <InvestmentUnitBox>
              <InvestmentUnitBoxText>
                Select Unit(s), Each unit is ₦850, 000
              </InvestmentUnitBoxText>
              <SelectBox>
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20,
                ].map((item, index) => (
                  <Checkbox
                    key={index}
                    name="unit"
                    value={item}
                    checked={checkedList.includes(item)}
                    onChange={onCheckItem(item)}
                  />
                ))}
              </SelectBox>
            </InvestmentUnitBox>
            <PaymentButton>
              <span>Pay ₦{unit * 850000}</span>
            </PaymentButton>
          </InvestmentUnit>
        </InvestmentWrapper>
        <FootNote>
          &copy; 2023. Proudly 20Fleet Team. Payment is secured by Wema Bank.
        </FootNote>
      </InvestmentContainer>
      <Outlet />
    </Fragment>
  );
};
