import TemperatureCard from "./Cards/Temperature";
import Humidity from "./Cards/Humidity";
import Precipitation from "./Cards/Precipitation";
import WindSpeed from "./Cards/WindSpeed";
import Pressure from "./Cards/Pressure";
import { useEffect, useState } from "react";
import { getLatestData } from "../../services/getData";
import { styled } from "styled-components";
const StyledLatestDataComponent = styled.div`
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: #fff;
  grid-row: span 2;
  & > h2 {
    margin: 0 0 1.5rem;
  }
  & > div {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, minmax(250px, 500px));
    grid-auto-flow: row;
    gap: 1.8rem;
  }

  .parameter-card {
    z-index: 0;
    position: relative;
    & > div {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
    }

    display: flex;
    justify-content: space-between;
    background-color: white;
    border-radius: 1.25rem;
    padding: 1.25rem;
    aspect-ratio: 2/1;

    h3 {
      color: var(--white, #fff);
      font-family: Manrope;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    p {
      color: var(--blur-grey, #f0f0f0);
      font-family: Manrope;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .tlintersectIcon {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -10;
    }
    .brintersectIcon {
      z-index: -10;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

export function LatestData() {
  const [latestData, setLatestData] = useState(null);
  useEffect(() => {
    async function fetch() {
      const res = await getLatestData();
      console.log(res);
      setLatestData(res);
    }
    fetch();
  }, []);
  return (
    <StyledLatestDataComponent>
      <h2>Latest Data</h2>
      <div>
        <TemperatureCard temperature={latestData?.temperature} />
        <Precipitation precipitation={latestData?.precipitation} />
        <WindSpeed wind_speed={latestData?.wind_speed} />
        <Pressure pressure={latestData?.atm_pressure} />
        <Humidity humidity={latestData?.humidity} />
      </div>
    </StyledLatestDataComponent>
  );
}
