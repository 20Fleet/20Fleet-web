import React from "react";
import { CoperateType } from "./coperate-type.form";
import { IndividualType } from "./individual-type.form";
import { JointType } from "./joint-type.form";

export const FormType = () => {
  const [investorType, setInvestorType] = React.useState("Individual");

  const type = localStorage.getItem("investorType");

  React.useEffect(() => {
    if (type) {
      setInvestorType(type);
    }
  }, [type]);

  const render = () => {
    switch (investorType) {
      case "Individual":
        return <IndividualType />;
      case "Corporate":
        return <CoperateType />;
      case "Group":
        return <JointType />;
      default:
        return <IndividualType />;
    }
  };

  return <>{render()}</>;
};
