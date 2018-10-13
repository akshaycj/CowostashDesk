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
            style={{ marginTop: 20 }}
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
            style={{ marginTop: 20 }}
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
            style={{ marginTop: 20 }}
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
            style={{ marginTop: 20 }}
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
          <Select
            placeholder="Select your age group"
            style={{ marginTop: 20, width: "100%" }}
          >
            <Option value="Below 18">Below 18</Option>
            <Option value="18-25">18-25</Option>
            <Option value="25-35">25-35</Option>
            <Option value="Above 35">Above 35</Option>
          </Select>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 20,
              marginLeft: 10,
              textAlign: "left",
              width: "100%"
            }}
          >
            Marital Status:
            <div style={{ marginTop: 20, width: "100%", display: "flex" }}>
              <Checkbox>Married</Checkbox>
              <Checkbox>Unmarried</Checkbox>
              <Checkbox>Prefer not to say</Checkbox>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
