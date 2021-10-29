import './HeroVideo.scss'
// import json file dynamically put image in
// remember that the image should be set as a video check mdn docs, also may be best to add the title underneath, make the likes a seperate component
//src={props.allVideos[0].image}>
//this is not rendering I will need some help
// create a header poster as baseline for the video?

// title will be based off of the current video state

function HeroVideo(props) {
  return (
    <section>
      <video className='video__player' controls poster={props.currentVideo.image}>
      </video>
    </section>
  )
}
export default HeroVideo;