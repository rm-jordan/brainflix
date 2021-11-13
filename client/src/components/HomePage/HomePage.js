import React from "react";
import HeroVideo from "../HeroVideo/HeroVideo";
import CommentBox from "../CommentBox/CommentBox";
import PostedComments from "../PostedComments/PostedComments";
import Main from "../Main/Main";
import VideoList from "../VideoList/VideoList";
import "./HomePage.scss";
import axios from "axios";

class HomePage extends React.Component {
  state = {
    video: [],
    currentVideo: null,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/videos`)
      .then((response) => {
        this.setState({ video: response.data });
        const videoId = this.props.match.params.id || response.data[0].id;
        this.getVideo(videoId);
      })
      .catch((error) => console.log("there is an error", error));
  }

  getVideo = (id) => {
    axios
      .get(`http://localhost:8080/videos/${id}`)
      .then((response) => {
        this.setState({ currentVideo: response.data });
        console.log("initial response", response);
      })
      .catch((error) => {
        console.log("error at call", error);
      });
  };

  componentDidUpdate(prevProps, prevState) {
    const videoId = this.props.match.params.id || this.state.video[0].id;
    if (prevState.currentVideo && prevState.currentVideo.id !== videoId) {
      this.getVideo(videoId);
    }
  }

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
