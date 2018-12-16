import React, { Component } from "react";
import "./index.css";
import logo from "../../Res/logo.svg";
import { Select, message } from "antd";
import { Link } from "react-router-dom";
import { BaseUrl } from "./../../Utils/Api";

const Option = Select.Option;

const purposes = [
  {
    data: "Delivery Boy",
    value: "db"
  },
  {
    data: "Employee",
    value: "emp"
  },
  {
    data: "Contract Employee",
    value: "ce"
  },
  {
    data: "Vendor",
    value: "ven"
  },
  {
    data: "Maintanence Worker",
    value: "mw"
  },
  {
    data: "Guest, Family & Friends",
    value: "fam"
  },
  {
    data: "Interview",
    value: "int"
  },
  {
    data: "Event",
    value: "evt"
  },
  {
    data: "Other",
    value: "otr"
  }
];

export default class extends Component {
  componentDidMount() {
    const auth_token = localStorage.getItem("auth_token");
    const device_id = localStorage.getItem("device_id");
    const token = localStorage.getItem("token");

    const url = BaseUrl + "desk/type_of_visits";
    var data = {
      auth_token: auth_token,
      Device_token: token
    };

    fetch(url, {
      method: "GET",
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
          console.log("--", data);
        }
      })
      .catch(error => {
        console.log("err", error);

        message.error("Error", error);
      });
  }

  render() {
    return (
      <div className="visitor-layout">
        <div className="visitor-main">
          <img src={logo} width={60} height={60} />
          <div className="visitor-card">
            <div className="visitor-card-text">
              Select purpose of your visit
            </div>
            <div>
              <Select
                className="visitor-card-select"
                placeholder="Select purpose"
              >
                {purposes.map(data => (
                  <Option value={data.value}>{data.data} </Option>
                ))}
              </Select>
            </div>
            <div
              className="visitor-bottom-button"
              style={{ marginRight: 20, marginLeft: "auto" }}
            >
              <Link to="/form" style={{ color: "white" }}>
                Next >
              </Link>
            </div>
          </div>
        </div>

        <div className="visitor-bottom-text">help@cowostash.com</div>
      </div>
    );
  }
}
