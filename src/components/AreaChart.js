import React, { Component } from "react";
import CanvasJSReact from "../canvasjs.react";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class AreaChart extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  state = {
    rows: []
  };

  setRows = rows => {
    return this.setState({
      rows: rows
    });
  };

  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Drivetrain Efficiency"
      },
      axisY: {
        title: "Energy used (in watt hours)"
      },
      toolTip: {
        shared: true
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        itemclick: this.toggleDataSeries
      },
      data: [
        {
          type: "stackedArea",
          name: "70mph",
          showInLegend: true,
          xValueFormatString: "YYYY",
          dataPoints: [
            { x: new Date(1990, 0), y: 339 },
            { x: new Date(2000, 0), y: 448 },
            { x: new Date(2010, 0), y: 588 },
            { x: new Date(2016, 0), y: 616 }
          ]
        },
        {
          type: "stackedArea",
          name: "65mph",
          showInLegend: true,
          xValueFormatString: "YYYY",
          dataPoints: [
            { x: new Date(1990, 0), y: 63 },
            { x: new Date(2000, 0), y: 100 },
            { x: new Date(2010, 0), y: 149 },
            { x: new Date(2016, 0), y: 152 }
          ]
        },
        {
          type: "stackedArea",
          name: "60mph",
          showInLegend: true,
          xValueFormatString: "YYYY",
          dataPoints: [
            { x: new Date(1990, 0), y: 48 },
            { x: new Date(2000, 0), y: 100 },
            { x: new Date(2010, 0), y: 119 },
            { x: new Date(2016, 0), y: 107 }
          ]
        },
        {
          type: "stackedArea",
          name: "55mph",
          showInLegend: true,
          xValueFormatString: "YYYY",
          dataPoints: [
            { x: new Date(1990, 0), y: 7 },
            { x: new Date(2000, 0), y: 45 },
            { x: new Date(2010, 0), y: 243 },
            { x: new Date(2016, 0), y: 450 }
          ]
        },
        {
          type: "stackedArea",
          name: "50mph",
          showInLegend: true,
          xValueFormatString: "YYYY",
          dataPoints: [
            { x: new Date(1990, 0), y: 6 },
            { x: new Date(2000, 0), y: 22 },
            { x: new Date(2010, 0), y: 49 },
            { x: new Date(2016, 0), y: 91 }
          ]
        }
      ]
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={ref => (this.chart = ref)} />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
