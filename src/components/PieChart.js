import React, { Component } from "react";
import CanvasJSReact from "../canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class PieChart extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light1", // "light1", "dark1", "dark2"
      title: {
        text: "Battery Usage"
      },
      data: [
        {
          type: "pie",
          indexLabel: "{label}: {y}%",
          startAngle: -90,
          dataPoints: [
            { y: 20, label: "A/C" },
            { y: 24, label: "Info" },
            { y: 20, label: "Motor Mgmt" },
            { y: 14, label: "Acc" },
            { y: 12, label: "Sentinel" },
            { y: 10, label: "Misc" }
          ]
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart options={options} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
