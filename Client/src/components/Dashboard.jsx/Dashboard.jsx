import React from "react";
import BarChart from "./BarChart";
import { styled } from "styled-components";
import { AreaChart } from "./AreaChart";

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <BarChart />
      <AreaChart />
    </StyledDashboard>
  );
}

export default Dashboard;
