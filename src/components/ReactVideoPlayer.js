import React, { useContext } from "react";
import ReactPlayer from "react-player/lazy";
import { VideosContext } from "../context/VideosContext";
import { useParams } from "react-router";

const ReactVideoPlayer = () => {
  const { videos } = useContext(VideosContext);
  const { id } = useParams();
  const video = videos?.filter((video) => video.id === id);
  return (
    <div className="w-2/3 m-10 flex video-box">
      <ReactPlayer url={video[0].url} controls={true} />
    </div>
  );
};

export default ReactVideoPlayer;
