import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const M24Radio = ({ streamUrl }) => {
  return (
    <H5AudioPlayer
      //autoPlay
      src={streamUrl}
      onPlay={(e) => console.log("Reproduciendo...")}
      // Puedes agregar otros eventos aquí, como onPause, onEnded, etc.
    />
  );
};

export default M24Radio;
