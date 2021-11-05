import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import CommentBox from "../CommentBox/CommentBox";
import PostedComments from "../PostedComments/PostedComments";
import Main from "../Main/Main";
import VideoList from "../VideoList/VideoList";
import "./HomePage.scss";
// import videoDetails from "../../data/video-details.json";
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
    video: [],
    currentVideo: null,
    comments: [],
    mainContent: [],
    // video & currentVideo from the json need replacing

    // need to set things for other changes like comments and the photo
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
        //set all video in state, inside callback calling get video with the first object in the array
        this.setState({ video: response.data }, () => {
          this.getVideo(this.state.video[0].id);
        });
      })
      .catch((error) => console.log("there is an error", error));
  }

  //makes this more reusable .. used to update active video state
  getVideo = (id) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${id}?api_key=47ffd825-f3d6-483b-ae09-531887cd1206`
      )
      .then((response) => {
        this.setState({ currentVideo: response.data });
        console.log("initial response", response);
      })
      .catch((error) => {
        console.log("error at call", error);
      });
  };

  // I think all I have to do now is pass things down to the components below?

  // then I need to see if my componentDidUpdate
  // use this to update my current state of the video
  // remember prevProps!

  // componentDidUpdate() {

  // }

  // handleVideoChange = (id) => {
  //   console.log("handleVideoChange", id);

  //   const foundVideo = this.state.video.find((video) => {
  //     return video.id === id;
  //   });
  //   this.setState({
  //     currentVideo: foundVideo,
  //   });
  // };
  componentDidUpdate(prevProps) {
    // console.log("I am the update", this.props);
    // need to find the match, params in an {}
    if (prevProps.match !== this.props.match) {
      // I need to get some info to set the state inside the components using params
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=47ffd825-f3d6-483b-ae09-531887cd1206`
        )
        .then((response) => {
          console.log("didUpdate", response);
          //when I clicked on the photo in the menu a response
          const mainContent = response.data;
          console.log("mainContent", mainContent);
          const comments = response.data.comments;
          console.log("comments", comments);
          // above works when clicking on videolist
          // need  a filter for the videoList
          const videoBar = this.state.video.filter(
            (video) => video.id !== this.props.match.params.id
          );
          this.setState({ videoBar, mainContent: [mainContent], comments });
        })
        .catch((error) => {
          console.log("did update error", error);
        });
    }
  }

  //filter inside videolist component filter by ids

  render() {
    if (this.state.currentVideo === null) return <h2>Video loading....</h2>;
    return (
      <>
        <HeroVideo currentVideo={this.state.currentVideo} />
        <div className="homepage__container">
          <div>
            <Main currentVideo={this.state.currentVideo} />
            <CommentBox />
            <PostedComments currentVideo={this.state.currentVideo} />
          </div>
          <div>
            <VideoList
              currentVideo={this.state.currentVideo}
              video={this.state.video}
            />
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
