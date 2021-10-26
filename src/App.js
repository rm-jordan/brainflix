import './styles/app.scss'
import Header from './components/Header/Header'
import HeroVideo from './components/HeroVideo/HeroVideo'
import allVideos from './data/videos.json'


function App() {
  return (
    <>
    <Header />
    <HeroVideo allVideos={allVideos}/>

    </>
  );
}

export default App;
