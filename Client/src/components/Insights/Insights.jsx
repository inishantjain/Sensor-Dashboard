import React from "react";
import { LatestData } from "./LatestData";
import LineChart from "./TemperatureLineChart";
import { styled } from "styled-components";
const StyledInsights = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
`;

function Insights() {
  return (
    <StyledInsights>
      <LatestData />
      <LineChart />
    </StyledInsights>
  );
}

export default Insights;
