import "./VideoList.scss";
import { Link } from "react-router-dom";
//removed on click event

export default function VideoList(props) {
  return (
    <section className="videolist">
      <h2 className="videolist__header">Next Videos</h2>
      <div className="videolist__container">
        <ul>
          {props.video
            .filter((video) => video.id !== props.currentVideo.id)
            .map((video) => {
              return (
                <li key={video.id}>
                  <Link to={"/videos/" + video.id}>
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
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
}
