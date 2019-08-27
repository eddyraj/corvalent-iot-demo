import ReactSpeedometer from "react-d3-speedometer";
import React, {Component} from "react";

export default class TirePressure extends Component {
state = { data: '' }

  componentDidMount() {
    var client = new window.Paho.MQTT.Client(
        "broker.mqttdashboard.com",
        8000,
        "clientId-0bJPiuAtD8"
      );

    var options = {
        timeout:3,
        onSuccess: onConnect
    }

    client.onMessageArrived = onMessageArrived.bind(this);
    client.connect(options);

    function onConnect(){
        console.log('Connected - subscribe');
        client.subscribe("corvalent/sensor1");
    }

    function onMessageArrived(msg){
        var data = JSON.parse(msg.payloadString);
        this.setState({data});
    }

    // var cb = new window.ClearBlade();
    // cb.init({
    //     email: "admin@admin.com",
    //     password: "admin",
    //     systemKey: "f0dcc1d50bfed7d7d09df097fe51",
    //     systemSecret: "F0DCC1D50BA4FBD1DE828BF9DCA401",
    //     callback: initCallback.bind(this)
    // });

    // function initCallback() {
    //     const msg = cb.Messaging({ ports: [8903], useSSL: true }, err => {
    //       if (!err) {
    //           console.log("subscribe");
    //         msg.subscribe("corvalent/sensor0", {}, msg => {
    //           console.log("fooooo", msg);
    //         });
    //       } else {
    //         console.log(err); 
    //       }
    //     });
    //   }

    // function initCallback(err, cb) {
    //   // err is a boolean, cb has APIs and constructors attached
    //   if (err) {
    //     throw new Error(cb);
    //   } else {
    //     console.log("initialized");
    //     console.log(cb);

    //     var messaging = cblade.Messaging({ useSSL: true },(err, cb1) => {
    //       if (err) {
    //         throw new Error(cb1);
    //       } else {
    //           console.log(cb1);
    //       }
    //     });
    //     messaging.subscribe("corvalent/sensor0", function(err, message) {
    //       if (err) {
    //         throw new Error(message);
    //       } else {
    //         // do something with response
    //         console.log(message);
    //       }
    //     });
    //   }
    // }
  }

  render() {
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
