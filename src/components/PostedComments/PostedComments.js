import './PostedComments.scss'

//check out your bandsite and see how you laid this part out so that you can style it properly//

//can probably use same default image you used from bandsite as well// 

//you got this//


export default function CommentsPosted() {
  return (
  <section className='posted'>
    <article className='posted__container'>
      <img src='' alt='' />
        <div>
          <div>
            <h4>Name</h4>
            <p>Date</p>
          </div>
          <p>This is where the long paragraph goes.</p>
        </div>
    </article>
    <article className='posted__container'>
      <img src='' alt='' />
        <div>
          <div>
            <h4>Name</h4>
            <p>Date</p>
          </div>
          <p>This is where the long paragraph goes.</p>
        </div>
    </article>
    <article className='posted__container'>
      <img src='' alt='' />
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