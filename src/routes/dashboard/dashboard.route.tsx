import { Fragment } from "react";
import {
  DashboardContainer,
  DashboardContent,
  DashboardSidebar,
  DashboardSidebarLogo,
  DashboardSidebarMenu,
  DashboardSidebarMenuItem,
  DashboardSidebarMenuItemIcon,
  DashboardSidebarMenuItemLink,
  DashboardSidebarMenuItemText,
} from "./dashboard.style";
import { AiFillHome } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import Logo from "../../assets/logo.png";
import { InvestmentPoolComponent } from "../../components/invesment-pool/investment-pool.component";
import { MyInvestment } from "../../components/my-investment/my-investment.component";

export const Dashboard: React.FC = () => {
  return (
    <Fragment>
      <DashboardContainer>
        <DashboardSidebar>
          <DashboardSidebarLogo>
            <img src={Logo} alt="20Fleeet Logo" />
          </DashboardSidebarLogo>
          <DashboardSidebarMenu>
            <DashboardSidebarMenuItem>
              <DashboardSidebarMenuItemLink href="#">
                <DashboardSidebarMenuItemIcon>
                  <AiFillHome />
                </DashboardSidebarMenuItemIcon>
                <DashboardSidebarMenuItemText>
                  Dashboard
                </DashboardSidebarMenuItemText>
              </DashboardSidebarMenuItemLink>
            </DashboardSidebarMenuItem>
            <DashboardSidebarMenuItem>
              <DashboardSidebarMenuItemLink href="#">
                <DashboardSidebarMenuItemIcon>
                  <AiFillHome />
                </DashboardSidebarMenuItemIcon>
                <DashboardSidebarMenuItemText>
                  Dashboard
                </DashboardSidebarMenuItemText>
              </DashboardSidebarMenuItemLink>
            </DashboardSidebarMenuItem>
            <DashboardSidebarMenuItem>
              <DashboardSidebarMenuItemLink href="#">
                <DashboardSidebarMenuItemIcon>
                  <AiFillHome />
                </DashboardSidebarMenuItemIcon>
                <DashboardSidebarMenuItemText>
                  Dashboard
                </DashboardSidebarMenuItemText>
              </DashboardSidebarMenuItemLink>
            </DashboardSidebarMenuItem>
            <DashboardSidebarMenuItem>
              <DashboardSidebarMenuItemLink href="#">
                <DashboardSidebarMenuItemIcon>
                  <TbLogout />
                </DashboardSidebarMenuItemIcon>
                <DashboardSidebarMenuItemText>
                  Logout
                </DashboardSidebarMenuItemText>
              </DashboardSidebarMenuItemLink>
            </DashboardSidebarMenuItem>
          </DashboardSidebarMenu>
        </DashboardSidebar>
        <DashboardContent>
          <InvestmentPoolComponent />
          <MyInvestment />
        </DashboardContent>
      </DashboardContainer>
    </Fragment>
  );
};
