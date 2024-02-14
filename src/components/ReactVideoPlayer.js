import React, { lazy } from "react";
import ReactPlayer from "react-player/lazy";
import video1 from "../assets/video1.mp4";
const VideoPlaylist = lazy(() => import("./VideoPlaylist"));

const ReactVideoPlayer = () => {
  return (
    <div className="w-2/3 m-10 flex">
      <ReactPlayer url={video1} controls={true} />
      <VideoPlaylist />
    </div>
  );
};

export default ReactVideoPlayer;
