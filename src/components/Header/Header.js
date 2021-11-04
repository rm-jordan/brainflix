import "./Header.scss";
import logo from "../../assets/images/Logo/BrainFlix-logo.svg";
import defaultPic from "../../assets/images/Images/Mohan-muruge.jpg";
import buttonIcon from "../../assets/images/Icons/upload.svg";
import { Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

// ////////my link is not working?
// <Link className="header__logo" to="/" exact component={HomePage}></Link> will not change pages

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/" exact>
          <img
            className="header__logo__img"
            src={logo}
            alt="this is the logo for the Brainflix website"
          />
        </Link>
        <div className="header__search__container">
          <input
            className="header__search"
            type="text"
            id="search"
            placeholder="Search"
          ></input>
          <img
            className="header__img"
            src={defaultPic}
            alt="small icon of default a person"
          />
        </div>

        <div className="header__button__container">
          <button className="header__button">
            <img
              className="header__button__icon"
              src={buttonIcon}
              alt="upload icon"
            />
            UPLOAD
          </button>
        </div>
        <img
          className="header__img--bottom"
          src={defaultPic}
          alt="small icon of default a person"
        />
      </div>
    </header>
  );
}
