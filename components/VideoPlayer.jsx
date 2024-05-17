import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, onReady }) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="flex justify-center">
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;
