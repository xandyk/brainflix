import React from "react";
import hero from "../assets/Images/video-list-0.jpg";
import avatar from "../assets/Images/Mohan-muruge.jpg";
// import play from "../assets/Icons/SVG/Icon-play.svg";
// import fullscreen from "../assets/Icons/SVG/Icon-fullscreen.svg";
// import volume from "../assets/Icons/SVG/Icon-volume.svg";
import views from "../assets/Icons/SVG/Icon-views.svg";
import likes from "../assets/Icons/SVG/Icon-likes.svg";


export default function Main() {
    return (
      <>
        <section className="video__container">
          <div className="video__img-box">
            <img className="video__img" src={hero} />
          </div>
          <div className="video__controller">
            <video controls width="320">
              {" "}
            </video>
            {/* <img className="video__controller-play" src={play} />
          <div className="video__controller-blackbox"></div>
          <img className="video__controller-fullscreen" src={fullscreen} />
          <img className="video__controller-volume" src={volume} /> */}
          </div>
        </section>

        <section className="section">
          <h1 class="section__heading">BMX Rampage: 2018 Heighlights</h1>

          <div className="author-date">
            <span className="author">By Red Cow</span>
            <span className="date"> 12/18/2018</span>
          </div>

          <div className="views-likes">
            <img className="views" src={views} />
            <span className="number">1,001,023</span>
            <img className="likes" src={likes} />
            <span className="number"> 110,985</span>
          </div>

          <article className="description">
            <p className="description-text">
              On a gusty day in Southern Utah, a group of 25 daring mountain
              bikers blew the doors off what is possible on two wheels,
              unleashing some of the biggest moments the sport has ever seen.
              While mother nature only allowed for one full run before the
              conditions made it impossible to ride, that was all that was
              needed for event veteran Kyle Strait, who won the event for the
              second time -- eight years after his first Red Cow Rampage title
            </p>
          </article>

          <article className="article">
            <h1 className="comments-heading">3 Comments</h1>
            <form className="form-container">
              <div>
                <img className="comment__avatar-img" src={avatar} />
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
