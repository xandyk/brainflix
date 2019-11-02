import NextVideoOne from "../assets/Images/video-list-1.jpg";
import NextVideoTwo from "../assets/Images/video-list-2.jpg";
import NextVideoThree from "../assets/Images/video-list-3.jpg";
import NextVideoFour from "../assets/Images/video-list-4.jpg";
import NextVideoFive from "../assets/Images/video-list-5.jpg";
import NextVideoSix from "../assets/Images/video-list-6.jpg";
import NextVideoSeven from "../assets/Images/video-list-7.jpg";
import NextVideoEight from "../assets/Images/video-list-8.jpg";
import React from 'react'

export default function NextVideo(props) {
  console.log(props.data);
  const videoElements = props.data.map(function(video) {
    return (
      <div className="video-container">
        <div className="video-one">
          <img className="video-img" src={NextVideoOne} />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.author}</h5>
        </div>

        <div className="video-two">
          <img className="video-img" src={NextVideoTwo} />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.author}</h5>
        </div>

        <div className="video-three">
          <img className="video-img" src={NextVideoThree} />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.author}</h5>
        </div>

        <div className="video-four">
          <img className="video-img" src={NextVideoFour} />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.author}</h5>
        </div>

        <div className="video-five">
          <img className="video-img" src={NextVideoFive} />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.author}</h5>
        </div>

        <div className="video-six">
          <img className="video-img" src={NextVideoSix} />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.author}</h5>
        </div>

        <div className="video-seven">
          <img className="video-img" src={NextVideoSeven} />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.author}</h5>
        </div>

        <div className="video-eight">
          <img className="video-img" src={NextVideoEight} />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.author}</h5>
        </div>
      </div>
    );
  });

  return <section>
            {videoElements}
        </section>;
}








