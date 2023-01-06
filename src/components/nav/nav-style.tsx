import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  z-index: 999;
`;

export const NavLogo = styled(Link)`
  text-decoration: none;
  img {
    width: 100px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavListItem = styled.li`
  margin: 0 1rem;
`;

export const NavItemLink = styled.a`
  text-decoration: none;
  color: #000000;
  text-transform: capitalize;
  font-size: 1.1rem;
`;
