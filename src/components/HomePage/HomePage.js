import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import CommentBox from "../CommentBox/CommentBox";
import PostedComments from "../PostedComments/PostedComments";
import Main from "../Main/Main";
import VideoList from "../VideoList/VideoList";
import "./HomePage.scss";
import videoDetails from "../../data/video-details.json";

// here I will need to load some information from the API and render my components

// {
//   "api_key": "47ffd825-f3d6-483b-ae09-531887cd1206"
//   }

// GET: /videos

// GET: videos/ :id

// make homepage class based component

//   currentVideo, <--taken from original
// videoDetails,
// handleVideoChange,

class HomePage extends React.Component {
  state = {
    video: videoDetails,
    currentVideo: videoDetails[0],
  };

  handleVideoChange = (id) => {
    console.log("handleVideoChange", id);

    const foundVideo = this.state.video.find((video) => {
      return video.id === id;
    });
    this.setState({
      currentVideo: foundVideo,
    });
  };

  render() {
    return (
      <>
        <HeroVideo currentVideo={this.state.currentVideo} />
        <div className="homepage__container">
          <div>
            <Main currentVideo={this.state.currentVideo} />
            <CommentBox />
            <PostedComments videoDetails={videoDetails} />
          </div>
          <div>
            <VideoList
              videoDetails={videoDetails}
              handleVideoChange={this.handleVideoChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
