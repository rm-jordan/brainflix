import "./VideoList.scss";
import { Link } from "react-router-dom";

export default function VideoList(props) {
  return (
    <section className="videolist">
      <h2>Next Videos</h2>
      <div className="videolist__container">
        <ul>
          {props.videoDetails.map((video) => {
            return (
              <li
                key={video.id}
                onClick={() => {
                  props.handleVideoChange(video.id);
                }}
              >
                <div className="videolist__img__container">
                  <img
                    className="videolist__img"
                    src={video.image}
                    alt={video.title}
                  />
                </div>
                <div>
                  <h2>{video.title}</h2>
                  <h3>{video.channel}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
