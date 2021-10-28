import './Main.scss'
import views from '../../assets/images/Icons/views.svg'
import likes from '../../assets/images/Icons/likes.svg'



export default function Main(props) {
  return (
    <>
    <h1 className='main__header'>{props.videoDetails[0].title}</h1>
    <div>
      <h3 className='main__author'>{props.videoDetails[0].channel}</h3>
      <p className='main__date'>{props.videoDetails[0].timestamp}</p>
    </div>
    <div>
    <p><img src={views}
    alt='this is an icon of an eye'/> {props.videoDetails[0].views}</p>
    <p> <img src={likes}
    alt='this is an icon of a heart'/>{props.videoDetails[0].likes}</p>
    </div>

    <div>
      <p>{props.videoDetails[0].description}</p>
    </div>
    
    </>
  )
}

