import styled from "styled-components";

export const DashboardSidebarContainer = styled.div``;

export const DashboardSidebar = styled.div`
  background: #fff;
  /* position: fixed;
  left: 0; */
  height: 100%;
  width: 78px;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
`;

export const DashboardSidebarLogo = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  img {
    width: 60px;
  }
`;

export const DashboardSidebarMenu = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 20px;
  height: 100%;
  list-style: none;
`;

export const DashboardSidebarMenuItem = styled.li`
  /* position: relative;
  margin: 8px 0;
  list-style: none; */

  /* display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.7rem 0;
  cursor: pointer;

  @media (min-width: 428px) and (max-width: 919px) {
    font-size: 10px;
  }
  &:hover {
    color: #261362;
  } */

  position: relative;
  margin: 8px 0;
  list-style: none;
`;

export const DashboardSidebarMenuItemIcon = styled.div`
  color: #000;
  height: 50px;
  min-width: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
`;

export const DashboardSidebarMenuItemText = styled.div`
  margin-left: 10px;
  display: none;
`;

export const DashboardSidebarMenuItemLink = styled.a`
  text-decoration: none;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  transition: all 0.4s ease;

  &:hover {
    background: #11101d;
    color: #fff;
  }
`;
