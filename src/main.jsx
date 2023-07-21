import React from "react";
import ReactDOM from "react-dom";
import DelSol from "./components/DelSol";
import M24Radio from "./components/M24Radio";

const streamUrl =
  "https://delsol-2.nty.uy/stream/1/?type=http&nocache=2780&dbl=0";

const streamUrlM24 =
  "https://streaming2.hostingmontevideo.com:7003/stream?type=http&nocache=6078"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="App">
      <h1>Del Sol</h1>
      <DelSol streamUrl={streamUrl} />
      <h1>M24</h1>
      <M24Radio streamUrl={streamUrlM24} />
    </div>
  </React.StrictMode>
);



