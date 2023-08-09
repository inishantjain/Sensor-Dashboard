import axios from "axios";
const BASE = import.meta.env.VITE_API_URL;
// const BASE = "http://127.0.0.1:3000/api/endpoints";
// axios.defaults.baseURL = BASE;

export const getData = async (from, to,dayAverage =false) => {
  let res = [];
  try {
    const endPoint = new URL("duration", BASE);
    endPoint.searchParams.set("from", from);
    endPoint.searchParams.set("to", to);
    endPoint.searchParams.set("dayAverage", dayAverage);
    const response = await axios.get(endPoint);
    // console.log("API Response", response);
    res = response.data?.data;
  } catch (error) {
    console.error(error);
  }
  return res;
};

export const getLatestData = async () => {
  let res = [];
  try {
    const endPoint = new URL("latest", "http://127.0.0.1:3000/api/endpoints");
    const response = await axios.get(endPoint);
    // console.log("API Response", response);
    res = response.data?.data;
  } catch (error) {
    console.error(error);
  }
  return res;
};

export const getYearData = async (year) => {
  let res = [];
  try {
    const endPoint = new URL("year", BASE);
    endPoint.searchParams.set("year", year);

    const response = await axios.get(endPoint);
    // console.log("API Response", response);
    res = response.data?.data;
    console.log(res);
  } catch (error) {
    console.error(error);
  }
  return res;
};
