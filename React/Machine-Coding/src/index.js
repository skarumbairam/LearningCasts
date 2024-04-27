import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Profiler id="App" onRender={onRender}>
      <App />
    </Profiler>
  </BrowserRouter>
);

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(phase, actualDuration, baseDuration);
}
