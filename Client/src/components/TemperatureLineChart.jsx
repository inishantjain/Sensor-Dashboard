import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import {
  Chart as ChartJS,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  LineElement,
  TimeSeriesScale,
  // Title,
  // Tooltip,
  // Legend,
} from "chart.js";
import { getData } from "../services/getData";
import { StyledChartContainer } from "../StyledComponents/ChartContainer.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeSeriesScale
  // Title,
  // Tooltip,
  // Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Temperature",
    },
  },
  scales: {
    y: {
      ticks: {
        // forces step size to be 50 units
        stepSize: 2,
      },
    },
    x: {
      type: "timeseries",
    },
  },
};
function LineChart() {
  const [fetchedData, setFetchedData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getData("2020-01-01", "2020-01-01");
      setFetchedData(res);
    })();
  }, []);
  const data = {
    labels: fetchedData.map((item) => item?.timestamp),
    datasets: [
      {
        label: "Sales of the week",
        data: fetchedData.map((item) => item?.temperature),
        borderWidth: 1,
        pointRadius: 1,
        backgroundColor: "#369FFF",
        borderColor: "#369FFF",
        pointBorderWidth: 0,
        // pointBorderColor: "#369FFF",
      },
    ],
  };
  return (
    <StyledChartContainer>
      <Line data={data} options={options} />
    </StyledChartContainer>
  );
}

export default LineChart;
