import ReactSpeedometer from "react-d3-speedometer";
import React, { Component } from "react";
import "clearblade-js-client/lib/mqttws31";
import "clearblade-js-client";

export default class TirePressure extends Component {
  state = { data: "" };

  componentDidMount() {
    var cb = new window.ClearBlade();
    cb.init({
      email: "eddy.rajiah@gmail.com",
      password: "123456",
      systemKey: "f0dcc1d50bfed7d7d09df097fe51",
      systemSecret: "F0DCC1D50BA4FBD1DE828BF9DCA401",
      callback: initCallback.bind(this)
    });

    function initCallback() {
      const msg = cb.Messaging({ useSSL: true }, err => {
        if (!err) {
          console.log("subscribed");
          msg.subscribe("corvalent/tiresSensor", {}, msg => {
            //console.log("fooooo", msg);
            var data = JSON.parse(msg);
            this.setState({ data });
          });
        } else {
          console.log(err);
        }
      });
    }
  }

  render() {
    // console.log(this.state.data.sensor1);
    return (
      <>
        <h4 className="text-dark">Tire pressure</h4>
        <div className="d-flex">
          <div
            style={{
              width: "250px",
              height: "250px"
            }}
          >
            <ReactSpeedometer
              fluidWidth={true}
              minValue={10}
              maxValue={50}
              value={this.state.data.sensor1}
              needleColor="#6C757D"
              segmentColors={[
                "#FF461C",
                "#F6951E",
                "#ECDB23",
                "#69D72D",
                "#FF461C"
              ]}
            />
          </div>
          <div
            style={{
              width: "250px",
              height: "250px"
            }}
          >
            <ReactSpeedometer
              fluidWidth={true}
              minValue={10}
              maxValue={50}
              value={this.state.data.sensor2}
              needleColor="#6C757D"
              segmentColors={[
                "#FF461C",
                "#F6951E",
                "#ECDB23",
                "#69D72D",
                "#FF461C"
              ]}
            />
          </div>
        </div>
        <div className="d-flex">
          <div
            style={{
              width: "250px",
              height: "250px"
            }}
          >
            <ReactSpeedometer
              fluidWidth={true}
              minValue={10}
              maxValue={50}
              value={this.state.data.sensor3}
              needleColor="#6C757D"
              segmentColors={[
                "#FF461C",
                "#F6951E",
                "#ECDB23",
                "#69D72D",
                "#FF461C"
              ]}
            />
          </div>
          <div
            style={{
              width: "250px",
              height: "250px"
            }}
          >
            <ReactSpeedometer
              fluidWidth={true}
              minValue={10}
              maxValue={50}
              value={this.state.data.sensor4}
              needleColor="#6C757D"
              segmentColors={[
                "#FF461C",
                "#F6951E",
                "#ECDB23",
                "#69D72D",
                "#FF461C"
              ]}
            />
          </div>
        </div>
      </>
    );
  }
}
