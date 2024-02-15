import React, { useContext, useState } from "react";
import { VideosContext } from "../context/VideosContext";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { videos } = useContext(VideosContext);
  const [allVideos, setAllVideos] = useState(videos.categories[0].videos);
  return (
    <div className="w-5/6 mt-14 mx-auto my-auto flex flex-wrap justify-between">
      {allVideos?.map((video, i) => (
        <div className="card lg:w-1/5 mt-5 mx-3 sm:w-1/2 w-full" key={video.id}>
          <NavLink to={`/video/${video.id}`}>
            <img src={video.thumb} alt={video.title} className="rounded-t-lg" />
            <div>
              <p className="m-2">{video.title + " - " + video.subtitle}</p>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Home;
