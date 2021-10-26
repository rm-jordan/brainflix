import './HeroVideo.scss'
// import json file dynamically put image in
// remember that the image should be set as a video check mdn docs, also may be best to add the title underneath, make the likes a seperate component

export default function HeroVideo(props) {
  return (
    <img className='hero__img' src ={props.allVideos[0].image} alt='some lads doing some bmx biking' />
  )
}