import React from "react";
import BarChart from "../Charts/BarChart";
import { styled } from "styled-components";

const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <BarChart />
    </StyledDashboard>
  );
}

export default Dashboard;
