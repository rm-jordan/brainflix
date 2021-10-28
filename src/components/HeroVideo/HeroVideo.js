import './HeroVideo.scss'
// import json file dynamically put image in
// remember that the image should be set as a video check mdn docs, also may be best to add the title underneath, make the likes a seperate component

//this is not rendering I will need some help

export default function HeroVideo(props) {
  return (
    <section>
      <video className='hero__img'>
        <source src={props.allVideos[0].image}></source>
      </video>
    </section>
  )
}