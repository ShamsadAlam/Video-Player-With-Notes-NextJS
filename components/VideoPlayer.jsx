import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, onReady }) => {
  const opts = {
    height: "600",
    width: "1000",
    playerVars: {
      autoplay: 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default VideoPlayer;
