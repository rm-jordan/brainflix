import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import CommentBox from "../CommentBox/CommentBox";
import PostedComments from "../PostedComments/PostedComments";
import Main from "../Main/Main";
import VideoList from "../VideoList/VideoList";
import "./HomePage.scss";

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
