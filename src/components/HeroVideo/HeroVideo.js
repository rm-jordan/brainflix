import './HeroVideo.scss'



function HeroVideo(props) {
  return (
    <section className='video'>
      <article className='video__player__container'>
      <video className='video__player' controls poster={props.currentVideo.image}>
      </video>
      </article>
    </section>
  )
}
export default HeroVideo;