import {
  DashboardNavContainer,
  DashboardNavIcon,
  DashboardSearchInput,
  DashboardSearchInputBox,
} from "./dashboard-nav.style";
import { FiSearch } from "react-icons/fi";
import { MdForwardToInbox } from "react-icons/md";

export const DashboardNavComponent = () => {
  return (
    <DashboardNavContainer>
      <DashboardSearchInputBox>
        <FiSearch />
        <DashboardSearchInput type="search" placeholder="Search" />
      </DashboardSearchInputBox>
      <DashboardNavIcon>
        <MdForwardToInbox />
      </DashboardNavIcon>
    </DashboardNavContainer>
  );
};
