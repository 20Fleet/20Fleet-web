import React from "react";
import { CheckboxContainer, CheckboxInput } from "./checkbox.style";

interface ICheckboxProps {
  name: string;
  value: number;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  name,
  label,
  value,
  checked,
  onChange,
  ...props
}) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
    </CheckboxContainer>
  );
};
