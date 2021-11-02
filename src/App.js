import { Component } from "react";
import "./styles/app.scss";
import Header from "./components/Header/Header";
import videoDetails from "./data/video-details.json";
import HomePage from "./components/HomePage/HomePage";

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

  render() {
    const { currentVideo } = this.state;
    console.log(currentVideo);
    return (
      <>
        <Header />
        <HomePage
          currentVideo={this.state.currentVideo}
          videoDetails={videoDetails}
          handleVideoChange={this.handleVideoChange}
        />
      </>
    );
  }
}

export default App;
