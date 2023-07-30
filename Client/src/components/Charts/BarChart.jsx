import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
const StyledBarContainer = styled.div`
  padding: 1rem;
  border-radius: 0%.4rem;
  background-color: white;
  & > div {
    display: flex;
  }
  button {
    background-color: hsl(201, 32%, 88%);
    padding: 0.2rem 0.4rem;
  }
  input {
    padding: 0.2rem 0.4rem;
  }
  .year-input {
    display: flex;
    gap: 0.5rem;
  }

  .checkbox-dropdown {
    background-color: salmon;
    display: inline-block;
    position: relative;
  }

  .dropdown-content {
    /* display: none; */
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .checkbox-dropdown:hover > .dropdown-content {
    display: none;
  }
`;
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getYearData } from "../../services/getData";
import { getRandomBrightColor } from "../../../utils/randomColor";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart() {
  const [apiData, setAPIData] = useState([]);
  const [fieldsToShow, setFieldsToShow] = useState([]);
  const year = useRef(2020);

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Bar Chart - Stacked",
      },
    },
    responsive: true,
    interaction: {
      // mode: 'index' as const,
      intersect: false,
    },
    scales: {
      // x: { stacked: true },
      // y: { stacked: true },
    },
  };

  async function fetchYearData(year) {
    const res = await getYearData(year);
    setAPIData(res);
    setFieldsToShow(Object.keys(res[0]).filter((field) => field !== "month")); //hardcoded
  }

  useEffect(() => {
    fetchYearData(year.current);
  }, []);

  return (
    <StyledBarContainer>
      {/* year input */}
      <div>
        <div className="year-input">
          <input
            type="number"
            defaultValue={year.current}
            onChange={(e) => {
              year.current = e.target.value;
            }}
          />
          <button type="" onClick={() => fetchYearData(year.current)}>
            Show
          </button>
        </div>
      </div>
      <Bar
        options={options}
        data={{
          labels: apiData.map((obj) => obj.month.slice(0, 3)),
          // datasets: [
          //   {
          //     label: "Min Temperature",
          //     data: apiData.map((obj) => obj.min_temperature),
          //     backgroundColor: "HSL(271, 100%, 65%)",
          //     stack: "Stack 0",
          //   },
          //   {
          //     label: "Average Temperature",
          //     data: apiData.map((obj) => obj.avg_temperature),
          //     backgroundColor: "rgb(255, 99, 132)",
          //     stack: "Stack 1",
          //   },
          //   {
          //     label: "Max Temperature",
          //     data: apiData.map((obj) => obj.max_temperature),
          //     backgroundColor: "rgb(53, 162, 235)",
          //     stack: "Stack 2",
          //   },
          // ],
          datasets: fieldsToShow?.map((dataset_name, i) => ({
            label: dataset_name
              .replace(/_/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase()),
            data: apiData.map((obj) => obj[dataset_name]),
            backgroundColor: getRandomBrightColor(),
            stack: `Stack ${i}`,
          })),
        }}
      />
    </StyledBarContainer>
  );
}
export default BarChart;
