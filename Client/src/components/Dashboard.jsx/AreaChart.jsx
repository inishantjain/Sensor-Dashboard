import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledAreaChart = styled.div`
  background-color: white;
  border-radius: 0.4rem;
  padding: 1rem;
  
  button {
    background-color: hsl(201, 32%, 88%);
    padding: 0.2rem 0.4rem;
    margin-inline : 1rem;
  }
`;

import zoomPlugin from "chartjs-plugin-zoom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  TimeSeriesScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getData } from "../../services/getData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeSeriesScale,
  Title,
  Tooltip,
  Filler,
  Legend,
  zoomPlugin
);

export const options = {
  spanGaps: true,
  animation: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Temperature",
    },
    zoom: {
      zoom: {
        wheel: {
          modifierKey: "shift",
          enabled: true,
        },
        pinch: {
          enabled: true,
        },
        mode: "x", //can be xy
      },
      pan: {
        enabled: true,
        mode: "x",
      },
    },
  },
  datasets: {
    line: {
      pointRadius: 0, // disable for all `'line'` datasets
    },
  },
  scales: {
    x: {
      type: "timeseries",
    },
    y: {
      //   suggestedMin: -10,
      //   suggestedMax: 150,
    },
  },
};

export function AreaChart() {
  const [fetchedData, setFetchedData] = useState([]);

  const [dateForm, setDateForm] = useState({from: "2022-12-31", to: "2022-12-31"});

  async function fetchData(from, to){
    const res = await getData(from, to, true);
    setFetchedData(res);
  }

  useEffect(() => {
    fetchData(dateForm.from, dateForm.to);
  }, []);


  const labels = fetchedData?.map((data) => data.timestamp);

  function handleDateForm(e){
    e.preventDefault();
    fetchData(dateForm.from, dateForm.to);
  }

  return (
    <StyledAreaChart>
      <form onSubmit={handleDateForm}>
        
        <label htmlFor="from">From</label>
        <input value={dateForm.from} onChange={(e)=>setDateForm({...dateForm, from:e.target.value})} type="date" name="from" id="from"/>
        <label htmlFor="to">To</label>
        <input value={dateForm.to} onChange={(e)=>setDateForm({...dateForm, from:e.target.value})} type="date" name="to" id="to"/>
        <button type="submit">Fetch</button>
      </form>
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              fill: true,
              label: "Temperature",
              data: fetchedData?.map((data) => data.temperature),
              borderColor: "hsl(34, 80%, 50%)",
              backgroundColor: "hsl(34, 80%, 50%,70%)",
              borderWidth: 1,
              tension: 0,
            },
          ],
        }}
      />
    </StyledAreaChart>
  );
}