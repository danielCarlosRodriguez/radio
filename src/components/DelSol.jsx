import { useRef, useState } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const DelSol = () => {
  const [emisora, setEmisora] = useState("DelSol")

  const [urlRadio, setUrlRadio] = useState(
    "https://delsol-2.nty.uy/stream/1/?type=http&nocache=2780&dbl=0"
  );

  const videoRef = useRef(null);
  

  const handlePlay = () => {
    videoRef.current.play();
    console.log("Reproduciendo...");
  };

  const handlePause = () => {
    videoRef.current.pause();
    console.log("Pausado...");
  };

  const handleEmisora = (url, emisora) => {
    setUrlRadio(url);
    setEmisora(emisora);
  };



  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-white">{emisora}</h1>
          <button
            type="button"
            className="btn btn-violet me-2"
            onClick={() =>
              handleEmisora(
                "https://delsol-2.nty.uy/stream/1/?type=http&nocache=2780&dbl=0",
                "DelSol"
              )
            }
          >
            Del Sol
          </button>

          <button
            type="button"
            className="btn btn-violet me-2"
            onClick={() =>
              handleEmisora(
                "https://streaming2.hostingmontevideo.com:7003/stream?type=http&nocache=6078",
                "M24"
              )
            }
          >
            M24
          </button>
        </div>

        <div className="col-md-6 offset-md-3 ">
          <div className="player mt-2 mx-4">
            <H5AudioPlayer
              autoPlay
              src={urlRadio}
              onPlay={handlePlay}
              onPause={handlePause}
            />
          </div>
        </div>
        <div className="col-md-6 offset-md-3">
          <div className="casette mt-2">
            <video
              ref={videoRef}
              src="/casette.mp4"
              loop
              style={{ maxWidth: "100%", marginTop: "15px" }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelSol;
