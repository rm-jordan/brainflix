import './PostedComments.scss'
import defaultImg from '../../assets/images/Images/default.png'



///unsure why the below part will not render

export default function CommentsPosted(props) {
  return (
  <section className='posted'>

  {props.videoDetails[0].comments.map(
    (comment) => (
      // console.log(comment)
  
        <article className='posted__container'>
    <img className='posted__img' 
    src={defaultImg} 
    alt='default avatar' />
        <div>
          <div>
            <h4>{comment.name}</h4>
            <p>{comment.timestamp}</p>
          </div>
          <p>{comment.comment}</p>
        </div>
    </article>
    )
  )}

  </section> )};