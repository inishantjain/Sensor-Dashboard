import React, { useEffect, useState } from "react";
import { getLatestData } from "../../services/getData";


function WeatherCondition() {
  const [condition, setCondition] = useState("clear");
  useEffect(() => {
    (async () => {
      const res = await getLatestData("2022-12-31", "2022-12-31");
      setCondition(res?.conditions);
    })();
  }, []);
  return (
    <div style={{
        backgroundColor:"white",
        borderRadius:"1rem",
        height:"100%",
        padding:"2rem",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"3rem",
        fontSize:"2rem",
    }}>
    <img height="200" src="./clear.png" alt="" />
    <h3>{condition}</h3>
    </div>
  );
}

export default WeatherCondition;
