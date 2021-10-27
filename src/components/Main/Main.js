import './Main.scss'
// more than likely will need to import the images as props and pass down as before, something is rendering worry about the styling of it at a later time


export default function Main(props) {
  return (
    <>
    <h1 className='main__header'>{props.videoDetails[0].title}</h1>
    <div>
      <h3 className='main__author'>{props.videoDetails[0].channel}</h3>
      <p className='main__date'>{props.videoDetails[0].timestamp}</p>
    </div>
    <div>
    <p><img src='../../assets/images/Icons/views.svg'
    alt='this is an icon of an eye'/> {props.videoDetails[0].views}</p>
    <p> <img src='../../assets/images/Icons/likes.svg'
    alt='this is an icon of a heart'/>{props.videoDetails[0].likes}</p>
    </div>

    <div>
      <p>{props.videoDetails[0].description}</p>
    </div>
    
    </>
  )
}

