import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Digit from "./Components/DigitLogin";
import Home from "./Components/HomeScreen";
import Visitor from "./Components/VisitorDetailsForm";
import Form from "./Components/VisitorForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/form" component={Form} />
            <Route path="/visitor" exact component={Visitor} />
            <Route path="/" exact component={Digit} />
            <Route path="/home" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
