import axios from "axios";
const url = import.meta.env.VITE_API_URL;
// axios.defaults.baseURL = url;

export const getData = async (from, to) => {
  let res = [];
  try {
    const endPoint = new URL(url + "/duration");
    endPoint.searchParams.set("from", from);
    endPoint.searchParams.set("to", to);
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
    const endPoint = new URL(url + "/latest");
    const response = await axios.get(endPoint);
    // console.log("API Response", response);
    res = response.data?.data;
  } catch (error) {
    console.error(error);
  }
  return res;
};
