import React from "react";

const ShimmerVideoPlaylist = () => {
  return (
    <div className="flex">
      {/* <VideoPlaylist /> */}
      <div className="w-2/3 m-10">
        <div className="flex video-box">
          <div className="bg-slate-300 w-4/5 h-3/5"></div>
        </div>
        <div className="fixed bottom-20">
          <h5 className="font-medium lg:text-lg sm:text-sm text-xs"></h5>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoPlaylist;
