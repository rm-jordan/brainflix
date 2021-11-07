import "./UploadPage.scss";
import buttonIcon from "../../assets/images/Icons/upload.svg";
import bicycle from "../../assets/images/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";

export default function UploadPage() {
  return (
    <section className="upload">
      <h1>Upload Video</h1>
      <form>
        <div className="upload__container-left">
          <p>Video Thumbnail</p>
          <img className="upload__img" src={bicycle} alt="this is a bicycle" />
        </div>
        <div className="upload__container--right">
          <label>Title Your Video</label>
          <input placeholder="Add a title to your video"></input>
          <label>Add a Video Description</label>
          <textarea placeholder="Add a description to your video"></textarea>
        </div>
        <div className="upload__button__container">
          <button
            type="submit"
            onClick={() => {
              alert("You have been notified of your upload!");
            }}
          >
            <Link to="/">
              <img
                className="header__button__icon"
                src={buttonIcon}
                alt="upload icon"
              />
              Publish
            </Link>
          </button>
          <button>
            <Link to="/">Cancel</Link>
          </button>
        </div>
      </form>
    </section>
  );
}
