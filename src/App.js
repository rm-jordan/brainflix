import { Component } from "react";
import "./styles/app.scss";
import Header from "./components/Header/Header";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import Main from "./components/Main/Main";
import CommentBox from "./components/CommentBox/CommentBox";
import PostedComments from "./components/PostedComments/PostedComments";
import VideoList from "./components/VideoList/VideoList";
import videoDetails from "./data/video-details.json";

class App extends Component {
  state = {
    video: videoDetails,
    currentVideo: videoDetails[0],
    // look at the example code so we can figure out how to handle this with an onClick event
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

  // I believe how I have this layed out might be inhibiting why I cannot put the videolist to the side
  render() {
    const { currentVideo } = this.state;
    console.log(currentVideo);
    return (
      <>
        <Header />
        <HeroVideo currentVideo={this.state.currentVideo} />
        <Main currentVideo={this.state.currentVideo} />
        <CommentBox />
        <PostedComments videoDetails={videoDetails} />
        <VideoList
          videoDetails={videoDetails}
          handleVideoChange={this.handleVideoChange}
        />
      </>
    );
  }
}

export default App;
