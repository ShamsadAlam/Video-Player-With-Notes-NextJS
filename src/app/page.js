"use client";
import React, { useState, useRef } from "react";
import VideoPlayer from "../../components/VideoPlayer";
import Notes from "..//../components/Notes";

export default function Home() {
  const [videoId, setVideoId] = useState("dQw4w9WgXcQ"); // Default video ID
  const playerRef = useRef(null);

  const onPlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const handleVideoChange = (e) => {
    setVideoId(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Video Player with Notes</h1>
      <input
        type="text"
        value={videoId}
        onChange={handleVideoChange}
        placeholder="Enter YouTube video ID"
        className="border p-2 mb-4 w-full"
      />
      <div className="flex justify-center items-center">
        <VideoPlayer videoId={videoId} onReady={onPlayerReady} />
      </div>
      <div className="border border-red-600">
        <Notes videoId={videoId} player={playerRef.current} />
      </div>
    </div>
  );
}
