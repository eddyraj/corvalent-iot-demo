import React, { Component } from "react";
import "./App.css";
import Car from "./components/Car";
import Logo from "./components/Logo";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    clicked: false,
    action: "default"
  };

  clicked = e => {
    this.setState({
      clicked: e
    });
  };

  setAction = e => {
    this.setState({
      action: e
    });
  };
  render() {
    return (
      <>
        <div className="container-fluid d-flex flex-column">
          <div className="row">
            <div className="bg-light align-items-center justify-content-center flex-fill cover-container">
              <div className="col-12">
                <div className="row">
                  <Logo action={this.setAction} />
                  <Header />
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <Buttons
                    clicked={this.state.clicked}
                    action={this.setAction}
                  />
                </div>
                <div className="col-10">
                  <Car clicked={this.clicked} action={this.state.action} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
