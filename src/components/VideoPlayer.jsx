import  { useEffect, useRef } from "react";
import videojs from "video.js";
import "@videojs/http-streaming"; // Importar el plugin para soporte HTTP Streaming

const VideoPlayer = () => {
  const videoNode = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Video.js configuration options
    const options = {
      techOrder: ["html5", "flash"],
      sources: [
        {
          src: "https://d1rnjt8o1ldtod.cloudfront.net/futura.m3u8",
          type: "application/x-mpegURL", // This is the MIME type for HLS (m3u8)
        },
      ],
      autoplay: true,
      controls: true,
    };

    // Create a new video.js player when the component mounts
    playerRef.current = videojs(videoNode.current, options, () => {
      console.log("Player is ready");
    });

    return () => {
      // Destroy the video.js player when the component unmounts
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoNode} className="video-js vjs-default-skin" />
    </div>
  );
};

export default VideoPlayer;
