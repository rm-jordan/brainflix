import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import CommentBox from "../CommentBox/CommentBox";
import PostedComments from "../PostedComments/PostedComments";
import Main from "../Main/Main";
import VideoList from "../VideoList/VideoList";
import "./HomePage.scss";
import videoDetails from "../../data/video-details.json";
import axios from "axios";

// {
//   "api_key": "47ffd825-f3d6-483b-ae09-531887cd1206"
//   }

// GET: /videos

// GET: videos/ :id

// make homepage class based component

class HomePage extends React.Component {
  state = {
    video: videoDetails,
    currentVideo: videoDetails[0],
  };

  //need to get the videolist information
  // may create api key and url variable later

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=47ffd825-f3d6-483b-ae09-531887cd1206`
      )
      .then((response) => {
        const getVideoList = response.data;
        console.log(getVideoList);
      })
      .catch();
  }

  handleVideoChange = (id) => {
    console.log("handleVideoChange", id);

    const foundVideo = this.state.video.find((video) => {
      return video.id === id;
    });
    this.setState({
      currentVideo: foundVideo,
    });
  };
  componentDidUpdate() {
    console.log(this.props);
  }

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
