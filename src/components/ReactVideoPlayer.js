import React, { useContext, useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { VideosContext } from "../context/VideosContext";
import { useParams } from "react-router";

const ReactVideoPlayer = () => {
  const { videos } = useContext(VideosContext);
  const [allVideos, setAllVideos] = useState(videos.categories[0].videos);
  const { id } = useParams();
  const video = allVideos?.filter((video) => video.id.toString() === id);
  useEffect(() => {
    document.title = video.title;
  }, [video.title]);
  return (
    <div className="w-2/3 m-10 flex video-box">
      <ReactPlayer url={video[0].sources[0]} controls={true} playing />
    </div>
  );
};

export default ReactVideoPlayer;
