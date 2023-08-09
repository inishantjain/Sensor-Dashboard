import React from "react";
import { LatestData } from "./LatestData";
import LineChart from "./TemperatureLineChart";
import { styled } from "styled-components";
import WeatherCondition from "./WeatherCondition";
const StyledInsights = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 1rem;
`;

function Insights() {
  return (
    <StyledInsights>
      <LatestData />
      <LineChart />
      <WeatherCondition />
    </StyledInsights>
  );
}

export default Insights;
