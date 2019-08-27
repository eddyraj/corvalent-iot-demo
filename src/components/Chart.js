import React, { Component } from 'react'

export class Chart extends Component {

    state = {
        rows: [],
    }

    setRows = (rows) => {
        return this.setState({
            rows:rows
        });
    }

    render() {

        var cblade = new window.ClearBlade();
        cblade.init({
            URI: 'https://platform.clearblade.com',  // e.g., 'https://platform.clearblade.com/'
            systemKey: 'f0dcc1d50bfed7d7d09df097fe51',
            systemSecret: 'F0DCC1D50BA4FBD1DE828BF9DCA401',
            email: "admin@admin.com",  // use registerEmail instead if you wish to create a new user
            password: "admin",
            callback: initCallback,
        });

        var rows1 = [];

        function initCallback(err, cb) {  // err is a boolean, cb has APIs and constructors attached
            if (err) {
                throw new Error(cb);
            } else {
                console.log("initialized");
                console.log(cb);
                var collection = cblade.Collection({ collectionName: "sensorValues" });
                var query = cblade.Query();
                collection.fetch(query, function (err, rows) {
                    if (err) {
                        throw new Error(err);
                    } else {
                        console.log(rows);
                        rows1 = rows;
                    }
                });

                // var messaging = cblade.Messaging({ "timeout": 15 }, function (err, cb) {
                //   if (err) {
                //     throw new Error(cb);
                //   }
                // });
                // messaging.subscribe('corvalent/sensor0', function (err, message) {
                //   if (err) {
                //     throw new Error(message);
                //   } else {
                //     // do something with response
                //     console.log(message);
                //   }
                // });

            }
        }
        return (
            <div>
                <h2>App</h2>
                {rows1}
            </div>
        )
    }
}

export default Chart
