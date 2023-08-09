import React from 'react'
import GaugeComponent from 'react-gauge-component'
const hPa = (value) => {
        return value.toFixed(0) + ' hPa';
 
  }

function Pressure({pressure:value}) {
  return (
    <div 
    style={{
        background: "#0B666A",
        borderRadius: "1rem",
        padding: "0.5rem",
        boxShadow: "0px 10px 30px 0px rgba(255, 209, 67, 0.40)",
      }}>
<h3 style={{padding:"1rem",color:"white",
        fontFamily:"manrope",}}>Pressure</h3>
<GaugeComponent
  arc={{
    nbSubArcs: 150,
    colorArray: ['#5BE12C', '#F5CD19', '#EA4228'],
    width: 0.3,
    padding: 0.003
  }}
  labels={{
    valueLabel: {
      fontSize: 40,
      formatTextValue: hPa
    },
    markLabel: {
      type: "outer",
      marks: [
        { value: 900 },
        { value: 1000 },
        { value: 1100 },
        { value: 1500 },
        { value: 2000 },
      ],
      valueConfig: { formatTextValue: value => value + 'hPa', fontSize: 5 },
    }
  }}
  value={value}
  minValue={10}
  maxValue={3000}
/>
    </div>
  )
}

export default Pressure
