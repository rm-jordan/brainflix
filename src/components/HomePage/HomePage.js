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
    comments: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos?api_key=47ffd825-f3d6-483b-ae09-531887cd1206`
      )
      .then((response) => {
        this.setState({ video: response.data }, () => {
          this.getVideo(this.state.video[0].id);
        });
      })
      .catch((error) => console.log("there is an error", error));
  }

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

  componentDidUpdate(prevProps) {
    if (prevProps.match !== this.props.match) {
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
          this.setState({ videoBar, currentVideo: response.data, comments });
        })
        .catch((error) => {
          console.log("did update error", error);
        });
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
