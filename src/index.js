import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./cores/routes/index";
import * as serviceWorker from "./serviceWorker";
import "antd/dist/antd.css";
import connection_websocket from "./cores/websocket/index";

connection_websocket.onopen = function () {
  // จะทำงานเมื่อเชื่อมต่อสำเร็จ
  console.log("connect webSocket");
  connection_websocket.send("Hello ABCDEF"); // ส่ง Data ไปที่ Server
};
connection_websocket.onerror = function (error) {
  console.error("WebSocket Error " + error);
};

ReactDOM.render(<Routes />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
