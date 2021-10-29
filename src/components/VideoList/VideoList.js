import './VideoList.scss'


// going to need to make this render based on the video at the top being selected, 

// A TOTAL GUESS ON HOW TO DO THIS


//ex if video.(name or id?) !== videoshown at top return (html parameters with video list inside minus the one shown on top) also need to connect the herovideo.js? create some function

export default function VideoList(props){

  return (
    <section className='videolist'>
      <div className='videolist__container'>
      <ul>
        {props.videoDetails.map((video)=> {
          return (<li key={video.id} onClick={()=> {
            props.handleVideoChange(video.id)
          }}>
            <img className='videolist__img' 
            src={video.image} alt={video.title} />
              <div>
                <h3>
                {video.title}
                </h3>
                <h4>{video.channel}</h4>
              </div>
            </li>
          )
        })}
      </ul>
      </div>
    </section>
  )
}