import './PostedComments.scss'
import defaultImg from '../../assets/images/Images/default.png'

//check out your bandsite and see how you laid this part out so that you can style it properly//

//can probably use same default image you used from bandsite as well// 

//you got this//

///unsure why the below part will not render

export default function CommentsPosted(props) {
  return (
  <section className='posted'>
    <article className='posted__container'>
    <img className='posted__img' src={defaultImg} alt='default avatar' />
        <div>
          <div>


            <h4>{props.videoDetails[0].name}</h4>
            <p>{props.videoDetails[1].timestamp}</p>
          </div>
          <p>{props.videoDetails[0].comment}</p>

        </div>
    </article>
    <article className='posted__container'>
    <img className='posted__img' src={defaultImg} alt='default avatar' />
        <div>
          <div>
            <h4>Name</h4>
            <p>Date</p>
          </div>
          <p>This is where the long paragraph goes.</p>
        </div>
    </article>
    <article className='posted__container'>
    <img className='posted__img' src={defaultImg} alt='default avatar' />
        <div>
          <div>
            <h4>Name</h4>
            <p>Date</p>
          </div>
          <p>This is where the long paragraph goes.</p>
        </div>
    </article>
  </section>


  )

}