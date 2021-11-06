import "./Main.scss";
import views from "../../assets/images/Icons/views.svg";
import likes from "../../assets/images/Icons/likes.svg";

export default function Main(props) {
  return (
    <section className="main">
      <h1 className="main__header">{props.currentVideo.title}</h1>
      <div className="main__container">
        <div className="main__left">
          <h3 className="main__author">By {props.currentVideo.channel}</h3>
          <p className="main__date">
            {new Date(props.currentVideo.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="main__right">
          <p>
            <img className="icon" src={views} alt="this is an icon of an eye" />{" "}
            {props.currentVideo.views}
          </p>
          <p>
            {" "}
            <img
              className="icon"
              src={likes}
              alt="this is an icon of a heart"
            />{" "}
            {props.currentVideo.likes}{" "}
          </p>
        </div>
      </div>

      <div>
        <p>{props.currentVideo.description}</p>
        <h3>{props.currentVideo.comments.length} Comments</h3>
      </div>
    </section>
  );
}
