import React, { Component } from "react";

import { Input, Icon, Button, Rate, Select, Checkbox } from "antd";
import { Link } from "react-router-dom";
import "./index.css";

const Option = Select.Option;

export default class extends Component {
  render() {
    return (
      <div className="visitor-form-main">
        <div className="form">
          <Input
            size="large"
            style={{ marginTop: 10 }}
            addonBefore={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Icon style={{ fontSize: 20, marginRight: 2 }} type="user" />
                Name
              </div>
            }
          />
          <Input
            size="large"
            style={{ marginTop: 10 }}
            addonBefore={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Icon style={{ fontSize: 20, marginRight: 2 }} type="mail" />
                E-mail
              </div>
            }
          />
          <Input
            size="large"
            style={{ marginTop: 10 }}
            addonBefore={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Icon style={{ fontSize: 20, marginRight: 2 }} type="mobile" />
                Mobile
              </div>
            }
          />
          <Input
            size="large"
            style={{ marginTop: 10 }}
            addonBefore={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Icon style={{ fontSize: 20, marginRight: 2 }} type="home" />
                Company
              </div>
            }
          />
          <Select style={{ marginTop: 10, width: "100%" }}>
            <Option value="Below 18">Below 18</Option>
            <Option value="18-25">18-25</Option>
            <Option value="25-35">25-35</Option>
          </Select>
        </div>
      </div>
    );
  }
}
