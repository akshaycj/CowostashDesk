import React, { Component } from "react";
import "./index.css";
import logo from "../../Res/logo.svg";
import { Input, message } from "antd";
import { Redirect } from "react-router-dom";
import { BaseUrl } from "./../../Utils/Api";

const url = BaseUrl + "desk/sessions";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "",
      redirect: false
    };
  }

  componentDidMount;

  onDigit = e => {
    this.setState({ code: e.target.value });
  };

  onConnect = () => {
    const code = localStorage.getItem("code");

    code == this.state.code ? this.onOld() : this.onNew();
  };

  onNew = () => {
    var data = {
      device_session: {
        code: this.state.code
      }
    };

    console.log("New");

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log("response", res);

        return res.json();
      })
      .then(data => {
        if (data) {
          console.log("data", data);
          localStorage.setItem("code", this.state.code);
          localStorage.setItem("auth_token", data.auth_token);
          localStorage.setItem("company_id", data.company_id);
          localStorage.setItem("device_id", data.device_id);
          localStorage.setItem("token", data.token);
          message.success(data.message);
          this.setState({ redirect: true });
        }
      })
      .catch(error => {
        message.error("Error", error.response);
      });
  };

  onOld = () => {
    console.log("Old");

    var data = {
      device_session: {
        auth_token: localStorage.getItem("token"),
        code: this.state.code
      }
    };

    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log("response", res);

        return res.json();
      })
      .then(data => {
        if (data) {
          console.log("data", data);
          localStorage.setItem("code", this.state.code);
          localStorage.setItem("auth_token", data.auth_token);

          localStorage.setItem("device_id", data.device_id);

          message.success(data.message);
          this.setState({ redirect: true });
        }
      })
      .catch(error => {
        message.error("Error", error.response);
      });
  };

  render() {
    return (
      <div className="">
        <div className="digit-main">
          <div className="digit-top">
            <img src={logo} width="75px" height="75px" />
            <div className="digit-top-text">
              <b>Cowostash</b>
            </div>
          </div>

          <div className="digit-mid">
            Enter your 8 digit connection key and connect your device
          </div>

          <div>
            <div className="digit-bottom-layout">
              <Input
                placeholder="8 digit connection key"
                style={{ borderRadius: 300, marginLeft: 4, height: 40 }}
                onChange={this.onDigit}
              />
              <div className="digit-bottom-button" onClick={this.onConnect}>
                Connect
              </div>
            </div>
          </div>
        </div>
        <div className="digit-bottom-text">help@cowostash.com</div>
        {this.state.redirect ? <Redirect to="/home" /> : null}
      </div>
    );
  }
}
