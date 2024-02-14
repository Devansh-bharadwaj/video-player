import React from "react";
import video1 from "../assets/video1.mp4";
import thumb1 from "../assets/akh-lad-jaave.jpg";
import video2 from "../assets/ban-kar-hawa.mp4";
import thumb2 from "../assets/ban-kar-hawa.jpg";
import video3 from "../assets/lal-vindi.mkv";
import thumb3 from "../assets/laal-bindi.jpg";
import video4 from "../assets/pachhtaoge.mp4";
import thumb4 from "../assets/pachtaoge.jpg";

const VideoPlaylist = () => {
  const videos = [
    {
      id: 1,
      url: video1,
      thumbnail: thumb1,
      about: "Akh lad jaave",
    },
    {
      id: 2,
      url: video2,
      thumbnail: thumb2,
      about: "ban kar hawa",
    },
    {
      id: 3,
      url: video3,
      thumbnail: thumb3,
      about: "Laal bindi",
    },
    {
      id: 4,
      url: video4,
      thumbnail: thumb4,
      about: "Pachhtaoge",
    },
  ];
  return (
    <div className="w-1/3 m-10">
      {videos.map((video) => (
        <div className="video-item w-3/4 cursor-pointer mb-20" key={video.id}>
          <div className="thumnail w-full">
            <img
              src={video.thumbnail}
              alt="video"
              className="w-full object-cover"
            />
            <h5 className="mt-2">{video.about}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoPlaylist;
