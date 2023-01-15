import { Fragment } from "react";
import {
  DashboardContainer,
  DashboardContent,
  DashboardMidContent,
  DashboardRightBar,
} from "./dashboard.style";
import { InvestmentPoolComponent } from "../../components/invesment-pool/investment-pool.component";
import { MyInvestment } from "../../components/my-investment/my-investment.component";
import { DashboardSidebarComponent } from "../../components/dashboard-sidebar/dashboard-sidebar.component";
import { DashboardNavComponent } from "../../components/dashboard-nav/dashboard-nav.component";
import { InvestmentProfileComponent } from "../../components/investment-profile/investment-profile.component";

export const Dashboard: React.FC = () => {
  return (
    <Fragment>
      <DashboardContainer>
        <DashboardSidebarComponent />
        <DashboardContent>
          <DashboardNavComponent />
          <InvestmentPoolComponent />
          <InvestmentProfileComponent />
        </DashboardContent>
        <DashboardRightBar>
          <MyInvestment />
        </DashboardRightBar>
      </DashboardContainer>
    </Fragment>
  );
};
