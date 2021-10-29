import {Component} from 'react';
import './styles/app.scss'
import Header from './components/Header/Header'
import HeroVideo from './components/HeroVideo/HeroVideo'
import Main from './components/Main/Main'
import CommentBox from './components/CommentBox/CommentBox'
import PostedComments from './components/PostedComments/PostedComments'
import VideoList from './components/VideoList/VideoList'

import videoDetails from './data/video-details.json'


class App extends Component {

  state = {
    currentVideo: videoDetails[0],
    // videoClicked: ''
  }

  render() {
  return (
    <>
    <Header />
    <HeroVideo currentVideo={this.state.currentVideo}/>
    <Main currentVideo={this.state.currentVideo}/>
    <CommentBox />
    <PostedComments videoDetails={videoDetails}/>
    <VideoList videoDetails={videoDetails} />
    </>

  );
  }
}

export default App;
