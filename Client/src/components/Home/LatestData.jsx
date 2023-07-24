import TemperatureCard from "../Cards/Temperature";
import Humidity from "../Cards/Humidity";
import Precipitation from "../Cards/Precipitation";
import WindSpeed from "../Cards/WindSpeed";
import { StyledLatestDataComponent } from "../../StyledComponents/Latest.styles";
import { useEffect, useState } from "react";
import { getLatestData } from "../../services/getData";

export function LatestData() {
  const [temperature, setTemperature] = useState(null);
  useEffect(() => {
    async function fetch() {
      const res = await getLatestData();
      console.log(res);
      setTemperature(res.temperature);
    }
    fetch();
  }, []);
  return (
    <StyledLatestDataComponent>
      <h2>Latest Data</h2>
      <div>
        <TemperatureCard temperature={temperature} />
        <Precipitation />
        <Humidity />
        <WindSpeed />
      </div>
    </StyledLatestDataComponent>
  );
}
