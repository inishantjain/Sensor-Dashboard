import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TemperatureCard({ temperature }) {
  const value = Math.abs(temperature);
  return (
    <div
      className="parameter-card"
      style={{
        background: "#369FFF",
        boxShadow: "0px 10px 30px 0px rgba(54, 159, 255, 0.40)",
      }}
    >
      <div>
        <h3>Temperature</h3>
        <img style={{ height: "50%" }} src="/temperature.svg" />
      </div>
      <div style={{ fontWeight: "700" }}>
        <CircularProgressbar
          // minValue={-40}
          counterClockwise="true"
          maxValue={130}
          value={value}
          text={`${value}°F`}
          circleRatio={1} //arc length wrt circle
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0,
            /*Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'*/
            // strokeLinecap: "butt",
            /* Text size */
            textSize: "1.2rem",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
            /*Can specify path transition in more detail, or remove it entirely*/
            // pathTransition: 'none',
            /* Colors*/
            pathColor: `#FFF`,
            textColor: "#FFF",
            trailColor: "#006ED3",
            // backgroundColor: "#3e98c7", //bg not displaying
          })}
        />
      </div>

      {/* //styling shapes */}
      <svg
        className="tlintersectIcon"
        width="81"
        height="41"
        viewBox="0 0 81 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Intersect"
          opacity="0.2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80.6191 0C79.5986 6.9096 73.3452 26.3399 47.5836 35.1535C22.5889 43.7047 6.12314 40.7638 0.000186172 38L0.000192349 20C0.000191457 8.95431 8.95451 6.78721e-06 20.0002 5.7411e-06L80.6191 0Z"
          fill="#006ED3"
        />
      </svg>
      <svg
        className="brintersectIcon"
        width="136"
        height="80"
        viewBox="0 0 136 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Intersect"
          opacity="0.2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.308594 80H116.001C127.038 80 135.987 71.0592 136.001 60.025C136.001 60.0167 136.001 60.0083 136.001 60L136.001 0C135.232 11.6667 121.97 35 75.0778 35C28.1855 35 5.69321 65 0.308594 80Z"
          fill="#006ED3"
        />
      </svg>
    </div>
  );
}

export default TemperatureCard;
