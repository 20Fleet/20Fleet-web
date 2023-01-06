import {
  FormBox,
  FormContainer,
  FormTitle,
  SelectInput,
  SelectOption,
} from "./multi-step-form.style";

export const InvestorType = () => {
  const investorType = [
    "Individual",
    "Bank",
    "Corporate",
    "Group",
    "Foreign Investor",
    "Other",
  ];

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem("investorType", event.target.value);
  };

  return (
    <FormContainer>
      <FormTitle>What type of investor are you?</FormTitle>
      <FormBox>
        <SelectInput onChange={onChange}>
          {investorType.map((type, index) => (
            <SelectOption key={index} value={type}>
              {type}
            </SelectOption>
          ))}
        </SelectInput>
      </FormBox>
    </FormContainer>
  );
};
