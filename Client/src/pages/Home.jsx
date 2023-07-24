import { useEffect, useState } from "react";
import { StyledHome } from "../StyledComponents/Home.styles";
import { StyledNavbar } from "../StyledComponents/Navbar.styles";
import Navbar from "../components/common/Navbar";
import { LatestData } from "../components/Home/LatestData";
import Sidebar from "../components/common/Sidebar";
import LineChart from "../components/TemperatureLineChart";
// import "";
function Home() {
  const [lineData, setLineData] = useState();
  // useEffect(() => {
  //   async function fetchData() {}
  // });
  return (
    <StyledHome>
      <Navbar />
      <Sidebar />
      <LatestData />
      <LineChart />
    </StyledHome>
  );
}
export default Home;
