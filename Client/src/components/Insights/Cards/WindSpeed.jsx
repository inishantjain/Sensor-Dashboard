import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import GaugeComponent from 'react-gauge-component'


function WindSpeed({ wind_speed: value }) {
  return (
    <div
      className=""
      style={{
        background: "#3D246C",
        borderRadius: "1rem",
        padding: "0.5rem",
        boxShadow: "0px 10px 30px 0px rgba(255, 209, 67, 0.40)",
        gridRow:2,
      }}
    >
<h3 style={{padding:"1rem",color:"white",
        fontFamily:"manrope",}}>Wind Speed</h3>
        <GaugeComponent
            value={value}
            type="radial"
            labels={{
              markLabel: {
                type: "outer",
                marks: [
                  { value: 20 },
                  { value: 40 },
                  { value: 60 },
                  { value: 80 },
                  { value: 100 }
                ]
              }
            }}
            arc={{
              colorArray: ['#5BE12C','#EA4228'],
              subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
              padding: 0.02,
              width: 0.3
            }}
            pointer={{
              elastic: true,
              animationDelay: 0
            }}
          />

    </div>
  );
}

export default WindSpeed;
