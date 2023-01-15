import styled from "styled-components";

export const DashboardContainer = styled.div`
  background: #f5f5f5;
  height: 100vh;
  display: flex;
`;

export const DashboardContent = styled.div`
  width: calc(100% - 78px);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const DashboardMidContent = styled.div`
  display: flex;
`;

export const DashboardRightBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
