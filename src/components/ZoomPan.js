import React, { Component } from "react";
import CanvasJSReact from "../canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class ZoomPan extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount(){
    var cblade = new window.ClearBlade();
    cblade.init({
      URI: "https://platform.clearblade.com", // e.g., 'https://platform.clearblade.com/'
      systemKey: "f0dcc1d50bfed7d7d09df097fe51",
      systemSecret: "F0DCC1D50BA4FBD1DE828BF9DCA401",
      email: "admin@admin.com", // use registerEmail instead if you wish to create a new user
      password: "admin",
      callback: initCallback.bind(this)
    });

    var dps = [];

    function initCallback(err, cb) {
      // err is a boolean, cb has APIs and constructors attached
      if (err) {
        throw new Error(cb);
      } else {
        console.log("initialized");
        console.log(cb);
        var collection = cblade.Collection({ collectionName: "sensorValues" });
        var query = cblade.Query();
        query.setPage(0, 0);
        collection.fetch(query, (err, rows) => {
          if (err) {
            throw new Error(err);
          } else {
            console.log(rows);
            var i = 0;
            rows.map(row => {
              dps.push({ x: i++, y: row.data.sensorvalue });
              return false;
            });
            this.setState({ data: dps })
          }
        });
      }
    }
  }

  render() {
    const options = {
      theme: "light2", // "light1", "dark1", "dark2"
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: "Drivetrain Sensor Values"
      },
      axisY: {
        includeZero: false
      },
      data: [
        {
          type: "area",
          dataPoints: this.state.data
        }
      ]
    };

    return (
      <div>
        <CanvasJSChart
          options={options}/>
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
