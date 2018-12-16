import React, { Component } from "react";
import "./index.css";
import logo from "../../Res/logo.svg";
import qr from "../../Res/qr.png";
import { Link } from "react-router-dom";
import { BaseUrl } from "./../../Utils/Api";
import { message } from "antd";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth_token: "",
      device_token: "",
      deviceId: ""
    };
  }

  componentDidMount() {
    // if (data != null) {
    //   this.setState(
    //     {
    //       auth_token: data.auth_token,
    //       device_token: data.token,
    //       deviceId: data.device_id
    //     },
    //     this.getConfig()
    //   );
    // }

    this.getConfig();
  }

  getConfig = () => {
    const auth_token = localStorage.getItem("auth_token");
    const device_id = localStorage.getItem("device_id");
    const token = localStorage.getItem("token");

    var data = {
      auth_token: auth_token,
      Device_token: token
    };


    

    console.log("s", data);

    const url =
      BaseUrl +
      "desk/devices/" +
      device_id +
      "/configurations/" +
      "?auth_token=" +
      auth_token +
      "&Device_token=" +
      token;

    console.log("url", url);

    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("response", res);

        return res.json();
      })
      .then(data => {
        if (data) {
          console.log("--", data);
        }
      })
      .catch(error => {
        message.error("Error", error.response);
      });
  };
  render() {
    return (
      <div>
        <div className="homeS-main">
          <img src={logo} width="100" height="100" />
          <div className="homeS-middle">
            <b style={{ fontSize: 62 }}>Hello</b>
            <div style={{ fontSize: 36, marginTop: 15 }}>
              Select your purpose of visit
            </div>
            <div style={{ display: "flex" }}>
              <div className="homeS-inner">
                <Link to="/visitor" style={{ color: "rgba(0,0,0,0.65)" }}>
                  Visitor
                </Link>
              </div>
              <div className="homeS-inner">Checkin</div>
            </div>
            <div style={{ fontSize: 26, marginTop: 35, cursor: "pointer" }}>
              Got a QR? Scan Now <img src={qr} width="35" height="35" />
            </div>
          </div>
        </div>
        <div className="digit-bottom-text">help@cowostash.com</div>
      </div>
    );
  }
}
