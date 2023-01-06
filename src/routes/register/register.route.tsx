import { Fragment, useState } from "react";
import { Outlet } from "react-router";
import {
  InvestorType,
  RegisterForm,
} from "../../components/multi-step-form";
import {
  FormButton,
  FormButtonContainer,
  RegisterContainer,
  RegisterWrapper,
} from "./register.style";

export const Register = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const render = () => {
    switch (step) {
      case 1:
        return <InvestorType />;
      case 2:
        return <RegisterForm />;
      default:
        return <InvestorType />;
    }
  };
  return (
    <Fragment>
      <RegisterContainer>
        <RegisterWrapper>
          {render()}
          <FormButtonContainer>
            {step > 1 && <FormButton onClick={prevStep}>Back</FormButton>}
            <FormButton onClick={nextStep}>
              {step === 2 ? "Submit Registration" : "Save & Continue"}
            </FormButton>
          </FormButtonContainer>
        </RegisterWrapper>
      </RegisterContainer>
      <Outlet />
    </Fragment>
  );
};
