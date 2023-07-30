import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";
const StyledHome = styled.div`
  margin: 1rem 1.3rem 0 1rem;
  gap: 1rem;
  display: grid;
  align-items: start;
`;
// import "";
function Home() {
  const [lineData, setLineData] = useState();
  // useEffect(() => {
  //   async function fetchData() {}
  // });
  return (
    <StyledHome>
      <Navbar />
      <div>
      <Outlet />
      </div>
    </StyledHome>
  );
}
export default Home;
