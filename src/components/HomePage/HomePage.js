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
    // video & currentVideo from the json need replacing
    video: videoDetails,
    currentVideo: videoDetails[0],
    sideBar: [],
    getVideoList: [],
  };

  //need to get the videolist information
  // may create api key and url variable later
  // first call will give me the general information from the api

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=47ffd825-f3d6-483b-ae09-531887cd1206`
      )
      .then((response) => {
        const getVideoList = response.data;
        console.log("videolist call", getVideoList); // <-- working!
      })
      .catch((error) => console.log("there is an error", error));
    // I believe I need to get the video id from the "main video" and then try and change it based on the other videos not being the "main video", could I use the main id directly in the call? will the response work from that? video id: 84e96018-4022-434e-80bf-000ce4cd12b8
    // will try and use after /videos but before the key

    // the above call failed -- api documentation shows id: '1af0jruup5gu' on response body example -- will try
    //nope was missing slash from initial call
    // response now working! <--boss!
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=47ffd825-f3d6-483b-ae09-531887cd1206`
      )
      .then((response) => {
        // use the videoDetails for the state change
        console.log("initial response", response); //<-- think I need the var
        // replace videoDetails var with sideBar
        let sideBar = getVideoList.filter(
          (video) => video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8"
        );
        console.log("this is the sidebar", sideBar);
        // need to create variables for the comments and to fill the data under the video, then set the state to render the data??????
      })
      .catch((error) => {
        console.log("error at call", error);
      });
  }

  // then I need to see if my componentDidUpdate
  // use this to update my current state of the video
  // remember prevProps!

  // componentDidUpdate() {

  // }

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
