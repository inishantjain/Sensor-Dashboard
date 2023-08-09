import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function Precipitation({ precipitation: value }) {
  return (
    <div
      className="parameter-card"
      style={{
        background: "#FF993A",
        boxShadow: "0px 10px 30px 0px rgba(255, 153, 58, 0.40)",
      }}
    >
      <div>
        <h3>Precipitation</h3>
        <div style={{ width: 65, height: 65, fontWeight: "700" }}>
          <CircularProgressbar
            // minValue={-40}
            counterClockwise="true"
            value={value}
            text={`${value}%`}
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
              trailColor: "#FF7E07",
              // backgroundColor: "#3e98c7", //bg not displaying
            })}
          />
        </div>
      </div>
      <img style={{ height: "100%" }} src="/precipitation.svg" />

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
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M80.6191 0C79.5986 6.9096 73.3452 26.3399 47.5836 35.1535C22.5889 43.7047 6.12314 40.7638 0.000186172 38L0.00017709 20C0.00017709 19.9941 0.000184718 19.9882 0.000184718 19.9823C0.00972057 8.94477 8.96039 6.78666e-06 20.0002 5.7411e-06L80.6191 0Z"
          fill="#FF7E07"
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
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.308594 80H116.001C127.038 80 135.987 71.0592 136.001 60.025C136.001 60.0167 136.001 60.0083 136.001 60L136.001 0C135.232 11.6667 121.97 35 75.0778 35C28.1855 35 5.69321 65 0.308594 80Z"
          fill="#FF7E07"
        />
      </svg>
    </div>
  );
}

export default Precipitation;
