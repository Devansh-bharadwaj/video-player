import React, { useContext, useState } from "react";
import { VideosContext } from "../context/VideosContext";
import { NavLink } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const VideoPlaylist = () => {
  const { videos } = useContext(VideosContext);
  // const [allVideos, setAllVideos] = useState([videos])
  return (
    <DragDropContext
      onDragEnd={(param) => {
        const srcI = param.source.index;
        const desI = param.destination.index;
        videos.splice(desI, 0, videos.splice(srcI, 1)[0]);
      }}
    >
      <Droppable droppableId="droppable - 1">
        {(provided, snapshot) => (
          <div
            className="w-1/3 m-10"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {videos?.map((video, i) => (
              <Draggable
                key={video.id}
                draggableId={"draggable-" + video.id}
                index={i}
              >
                {(provided, snapshot) => (
                  <NavLink
                    to={`/video/${video.id}`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <div
                      className="video-item w-full cursor-pointer mb-20"
                      {...provided.dragHandleProps}
                    >
                      <div className="thumnail w-full">
                        <img
                          src={video.thumbnail}
                          alt="video"
                          className="w-full object-cover"
                        />
                        <h5 className="mt-2 font-semibold">{video.about}</h5>
                      </div>
                    </div>
                  </NavLink>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default VideoPlaylist;
