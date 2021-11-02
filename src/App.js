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

  // <Header />

  // <Switch>

  // Route for the content in <HomePage />
  //API info will go into the <HomePage /> ???

  // Route for the content in the <UploadPage /> which somehow gets information similarily or from the homepage parameters?

  // </Switch>

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
