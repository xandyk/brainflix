import React from "react"; //functions ->rfc
import avatar from "../assets/Images/Mohan-muruge.jpg";
import views from "../assets/Icons/SVG/Icon-views.svg";
import likes from "../assets/Icons/SVG/Icon-likes.svg";


export default function Main(props) {
    return (
      <>
        <section className="video__container">
          <div className="video__img-box">
            <img className="video__img" src={props.data.image} alt="main video" />
          </div>
          <div className="video__controller">
            <video controls width="320">
              {" "}
            </video>
          </div>
        </section>

        <section className="section">
          <h1 class="section__heading">{props.data.title}</h1>

          <div className="author-date">
            <span className="author">{props.data.channel}</span>
            <span className="date">{props.data.timestamp}</span>
          </div>

          <div className="views-likes">
            <img className="views" src={views} alt="views-icon" />
            <span className="number">{props.data.views}</span>
            <img className="likes" src={likes} alt="likes-icon" />
            <span className="number">{props.data.likes}</span>
          </div>

          <article className="description">
            <p className="description-text">{props.data.description}</p>
          </article>

          <article className="article">
            <h1 className="comments-heading">
              {props.data.comments && props.data.comments.length} Comments
            </h1>
            <form className="form-container">
              <div>
                <img
                  className="comment__avatar-img"
                  src={avatar}
                  alt="avatar-img"
                />
              </div>

              <div className="form">
                <h6 className="form-label">JOIN THE CONVERSATION</h6>
                <input
                  className="form-input"
                  name="comment-box"
                  type="text"
                  value="That was easily the most spectacular BMX moment ever."
                ></input>
                <button className="form-submit">COMMENT</button>
              </div>
            </form>
          </article>
        </section>
      </>
    );
}
