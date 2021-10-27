import './CommentBox.scss'
import defaultPic from '../../assets/images/Images/Mohan-muruge.jpg'
import plus from '../../assets/images/Icons/add_comment.svg'

//should I set this up somehow that I can make this work to add comments is this done in the same function or as set of functions?


export default function Comments(){
  return (
    <div>
    <img className = 'header__img' src={defaultPic} alt='small icon of default a person' />
      <form>
        <label>JOIN THE CONVERSATION</label>
        <textarea placeholder='Add a new comment'></textarea>
        <button className='header__button'><img className='' 
        src={plus} alt='upload icon'
        />COMMENT</button>
      </form>
    </div>
  )
}