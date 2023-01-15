import { AiFillHome } from "react-icons/ai";
import { TbAsset, TbLogout, TbSettings } from "react-icons/tb";
import { BsWalletFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {
  DashboardSidebar,
  DashboardSidebarLogo,
  DashboardSidebarMenu,
  DashboardSidebarMenuItem,
  DashboardSidebarMenuItemIcon,
  DashboardSidebarMenuItemLink,
  DashboardSidebarMenuItemText,
} from "./dashboard-sidebar.style";
import Logo from "../../assets/logo.png";

export const DashboardSidebarComponent = () => {
  return (
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
            <DashboardSidebarMenuItemText>Home</DashboardSidebarMenuItemText>
          </DashboardSidebarMenuItemLink>
        </DashboardSidebarMenuItem>
        <DashboardSidebarMenuItem>
          <DashboardSidebarMenuItemLink href="#">
            <DashboardSidebarMenuItemIcon>
              <AiFillHome />
            </DashboardSidebarMenuItemIcon>
            <DashboardSidebarMenuItemText>
              My Investment
            </DashboardSidebarMenuItemText>
          </DashboardSidebarMenuItemLink>
        </DashboardSidebarMenuItem>
        <DashboardSidebarMenuItem>
          <DashboardSidebarMenuItemLink href="#">
            <DashboardSidebarMenuItemIcon>
              <TbAsset />
            </DashboardSidebarMenuItemIcon>
            <DashboardSidebarMenuItemText>
              Owned Assets
            </DashboardSidebarMenuItemText>
          </DashboardSidebarMenuItemLink>
        </DashboardSidebarMenuItem>
        <DashboardSidebarMenuItem>
          <DashboardSidebarMenuItemLink href="#">
            <DashboardSidebarMenuItemIcon>
              <MdPayment />
            </DashboardSidebarMenuItemIcon>
            <DashboardSidebarMenuItemText>
              Payments
            </DashboardSidebarMenuItemText>
          </DashboardSidebarMenuItemLink>
        </DashboardSidebarMenuItem>
        <DashboardSidebarMenuItem>
          <DashboardSidebarMenuItemLink href="#">
            <DashboardSidebarMenuItemIcon>
              <BsWalletFill />
            </DashboardSidebarMenuItemIcon>
            <DashboardSidebarMenuItemText>Wallets</DashboardSidebarMenuItemText>
          </DashboardSidebarMenuItemLink>
        </DashboardSidebarMenuItem>
        <DashboardSidebarMenuItem>
          <DashboardSidebarMenuItemLink href="#">
            <DashboardSidebarMenuItemIcon>
              <AiFillHome />
            </DashboardSidebarMenuItemIcon>
            <DashboardSidebarMenuItemText>Invest</DashboardSidebarMenuItemText>
          </DashboardSidebarMenuItemLink>
        </DashboardSidebarMenuItem>
        <DashboardSidebarMenuItem>
          <DashboardSidebarMenuItemLink href="#">
            <DashboardSidebarMenuItemIcon>
              <TbSettings />
            </DashboardSidebarMenuItemIcon>
            <DashboardSidebarMenuItemText>
              Settings
            </DashboardSidebarMenuItemText>
          </DashboardSidebarMenuItemLink>
        </DashboardSidebarMenuItem>
        <DashboardSidebarMenuItem>
          <DashboardSidebarMenuItemLink href="#">
            <DashboardSidebarMenuItemIcon>
              <CgProfile />
            </DashboardSidebarMenuItemIcon>
            <DashboardSidebarMenuItemText>Profile</DashboardSidebarMenuItemText>
          </DashboardSidebarMenuItemLink>
        </DashboardSidebarMenuItem>
        <DashboardSidebarMenuItem>
          <DashboardSidebarMenuItemLink href="#">
            <DashboardSidebarMenuItemIcon>
              <TbLogout />
            </DashboardSidebarMenuItemIcon>
            <DashboardSidebarMenuItemText>Logout</DashboardSidebarMenuItemText>
          </DashboardSidebarMenuItemLink>
        </DashboardSidebarMenuItem>
      </DashboardSidebarMenu>
    </DashboardSidebar>
  );
};
