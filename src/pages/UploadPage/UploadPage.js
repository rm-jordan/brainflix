import "./UploadPage.scss";
import buttonIcon from "../../assets/images/Icons/upload.svg";
import bicycle from "../../assets/images/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

export default function UploadPage() {
  return (
    <section className="upload">
      <h1>Upload Video</h1>
      <form>
        <div className="upload__container--left">
          <h3>VIDEO THUMBNAIL</h3>
          <img className="upload__img" src={bicycle} alt="this is a bicycle" />
        </div>
        <div className="upload__container--right">
          <label className="upload__form__label">TITLE YOUR VIDEO</label>
          <input
            className="upload__form__input"
            placeholder="Add a title to your video"
          ></input>
          <label className="upload__form__label">ADD A VIDEO DESCRIPTION</label>
          <textarea
            className="upload__form__textarea"
            placeholder="Add a description to your video"
          ></textarea>
        </div>
        <div className="upload__button__container">
          <button
            className="upload__button--publish"
            type="submit"
            onClick={() => {
              alert("You have been notified of your upload!");
            }}
          >
            <Link to="/">
              <img
                className="upload__button__icon"
                src={buttonIcon}
                alt="upload icon"
              />
              PUBLISH
            </Link>
          </button>
          <button className="upload__button--cancel">
            <Link to="/">CANCEL</Link>
          </button>
        </div>
      </form>
    </section>
  );
}
