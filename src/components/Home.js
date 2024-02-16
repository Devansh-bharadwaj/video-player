import React, { useContext, useState } from "react";
import { VideosContext } from "../context/VideosContext";
import { NavLink } from "react-router-dom";
import ShimmerHome from "./shimmer-ui/ShimmerHome";

const Home = () => {
  const { videos } = useContext(VideosContext);
  const [allVideos, setAllVideos] = useState(videos.categories[0].videos);
  const [searchInp, setSearchInp] = useState("");
  const [loading, setLoading] = useState(true);
  const searchHandler = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchInp(searchTerm);
    const filteredVideos = videos.categories[0].videos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchTerm) ||
        video.subtitle.toLowerCase().includes(searchTerm)
    );
    setAllVideos(filteredVideos);
  };

  const categories = [
    "All",
    "Movie",
    "Cartoon",
    "Recently Uploaded",
    "Music",
    "Web Series",
  ];

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  // const filterHandler = () => {};

  return (
    <>
      {loading ? (
        <ShimmerHome />
      ) : (
        <>
          <div className="w-full text-center fixed bg-white top-0 pb-5">
            <div className="flex justify-between flex-wrap w-5/6 m-auto mt-6">
              <ul className="w-1/2 list-none flex flex-nowrap overflow-x-scroll scrollbar-hidden justify-between">
                {categories.map((category) => (
                  <li
                    onClick={() => {
                      if (category === "All") {
                        setAllVideos(videos.categories[0].videos);
                      } else {
                        const filteredVideos =
                          videos.categories[0].videos.filter(
                            (video) =>
                              video.category.toLowerCase() ===
                              category.toLowerCase()
                          );
                        setAllVideos(filteredVideos);
                      }
                    }}
                    className="cursor-pointer border rounded px-4 py-2 inline-block mr-2 max-w-40 whitespace-nowrap"
                  >
                    {category}
                  </li>
                ))}
              </ul>
              <div className="w-1/2 text-right">
                <input
                  type="text"
                  className="rounded-lg w-5/6 p-2 border"
                  value={searchInp}
                  onChange={searchHandler}
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="w-5/6 mt-28 mx-auto my-auto flex flex-wrap lg:justify-items-start">
            {allVideos?.map((video) => (
              <div
                className="card mb-16 lg:w-72 mx-3 sm:w-5/12 w-full w-18-pr"
                key={video.id}
              >
                <NavLink to={`/video/${video.id}`}>
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="rounded-t-lg"
                  />
                  <div>
                    <p className="m-2">
                      {video.title + " - " + video.subtitle}
                    </p>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
