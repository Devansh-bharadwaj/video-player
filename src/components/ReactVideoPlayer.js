import React, { useContext, useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import { VideosContext } from "../context/VideosContext";
import { useParams } from "react-router";
import VideoPlaylist from "./VideoPlaylist";
import ShimmerVideoPlaylist from "./shimmer-ui/ShimmerVideoPlaylist";

const ReactVideoPlayer = () => {
  const { videos } = useContext(VideosContext);
  const [allVideos, setAllVideos] = useState(videos.categories[0].videos);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const video = allVideos?.filter((video) => video.id.toString() === id);
  const title = video[0].title;
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      {loading ? (
        <ShimmerVideoPlaylist />
      ) : (
        <div className="flex">
          <VideoPlaylist />
          <div className="w-2/3 m-10">
            <div className="flex video-box">
              <ReactPlayer url={video[0].sources[0]} controls={true} playing />
            </div>
            <div className="fixed bottom-20">
              <h5 className="font-medium lg:text-lg sm:text-sm text-xs">
                {video[0].title + " | " + video[0].subtitle}
              </h5>
              <p>{video[0].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReactVideoPlayer;
