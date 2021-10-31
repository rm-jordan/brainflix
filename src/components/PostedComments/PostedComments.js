import "./PostedComments.scss";
import defaultImg from "../../assets/images/Images/default.png";

export default function CommentsPosted(props) {
  return (
    <section className="posted">
      {props.videoDetails[0].comments.map((comment) => (
        <article className="posted__container">
          <img className="posted__img" src={defaultImg} alt="default avatar" />
          <div className="posted__comment">
            <div className="posted__info">
              <h4>{comment.name}</h4>
              <p>{new Date(comment.timestamp).toLocaleDateString()}</p>
            </div>
            <p>{comment.comment}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
