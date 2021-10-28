import './styles/app.scss'
import Header from './components/Header/Header'
import HeroVideo from './components/HeroVideo/HeroVideo'
import Main from './components/Main/Main'
import CommentBox from './components/CommentBox/CommentBox'
import PostedComments from './components/PostedComments/PostedComments'

import allVideos from './data/videos.json'
import videoDetails from './data/video-details.json'


function App() {
  return (
    <>
    <Header />
    <HeroVideo allVideos={allVideos}/>
    <Main videoDetails ={videoDetails}/>
    <CommentBox />
    <PostedComments videoDetails={videoDetails}/>
    </>
  );
}

export default App;
