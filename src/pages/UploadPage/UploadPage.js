import "./UploadPage.scss";
import buttonIcon from "../../assets/images/Icons/upload.svg";

export default function UploadPage() {
  return (
    <section>
      <h1>Upload Video</h1>
      <label>Video Thumbnail</label>
      <div className="img-container">
        <img src="" alt="this is a bicycle" />
      </div>
      <form>
        <label>Title Your Video</label>
        <input placeholder="Add a title to your video"></input>
        <label>Add a Video Description</label>
        <textarea placeholder="Add a description to your video"></textarea>
      </form>
      <button>
        <img
          className="header__button__icon"
          src={buttonIcon}
          alt="upload icon"
        />
        Publish
      </button>
      <button>Cancel</button>
    </section>
  );
}
