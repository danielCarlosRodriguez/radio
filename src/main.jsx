import React from "react";
import ReactDOM from "react-dom";
import RadioPlayer from "./components/RadioPlayer";

const streamUrl =
  "https://delsol-2.nty.uy/stream/1/?type=http&nocache=2780&dbl=0";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="App">
      <h1>Reproducir</h1>
      <RadioPlayer streamUrl={streamUrl} />
    </div>
  </React.StrictMode>
);



