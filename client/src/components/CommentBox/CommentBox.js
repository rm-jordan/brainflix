import "./CommentBox.scss";
import defaultPic from "../../assets/images/Images/Mohan-muruge.jpg";
import plus from "../../assets/images/Icons/add_comment.svg";

export default function Comments() {
  return (
    <section className="commentbox">
      <h2 className="commentbox__header">JOIN THE CONVERSATION</h2>
      <div className="commentbox__section__container">
        <div className="commentbox__container">
          <img
            className="commentbox__img"
            src={defaultPic}
            alt="small icon of default a person"
          />
          <form className="commentbox__form">
            <textarea
              className="commentbox__textarea"
              placeholder="  Add a new comment"
            ></textarea>
            <button className="commentbox__button">
              <img
                className="commentbox__button__icon"
                src={plus}
                alt="upload icon"
              />
              COMMENT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
