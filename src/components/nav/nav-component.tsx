import {
  NavContainer,
  NavItemLink,
  NavList,
  NavListItem,
  NavLogo,
} from "./nav-style";
import Logo from "../../assets/logo.png";

export const NavComponent = () => {
  return (
    <NavContainer>
      <NavLogo to="/">
        <img src={Logo} alt="20Fleeet Logo" />
      </NavLogo>
      <NavList>
        <NavListItem>
          <NavItemLink href="/login">login</NavItemLink>
        </NavListItem>
        <NavListItem>
          <NavItemLink href="/register">signup</NavItemLink>
        </NavListItem>
      </NavList>
    </NavContainer>
  );
};
