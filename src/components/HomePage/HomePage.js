import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import CommentBox from "../CommentBox/CommentBox";
import PostedComments from "../PostedComments/PostedComments";
import Main from "../Main/Main";
import VideoList from "../VideoList/VideoList";
import "./HomePage.scss";

// here I will need to load some information from the API and render my components

// {
//   "api_key": "47ffd825-f3d6-483b-ae09-531887cd1206"
//   }

// GET: /videos

// GET: videos/ :id

export default function HomePage({
  currentVideo,
  videoDetails,
  handleVideoChange,
}) {
  return (
    <>
      <HeroVideo currentVideo={currentVideo} />
      <div className="homepage__container">
        <div>
          <Main currentVideo={currentVideo} />
          <CommentBox />
          <PostedComments videoDetails={videoDetails} />
        </div>
        <div>
          <VideoList
            videoDetails={videoDetails}
            handleVideoChange={handleVideoChange}
          />
        </div>
      </div>
    </>
  );
}
