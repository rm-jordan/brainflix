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
  // I want to flex the content of the videolist to the right hand side @desktop...

  // make it <Header />
  // then <Allothercomponents />
  //then <Videolist />
  //then flex the videolist to the <Allothercomponents />
  // or have all the other components in a large file and flex things there

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
