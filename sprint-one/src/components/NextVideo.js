import NextVideoOne from "../assets/Images/video-list-1.jpg";
import NextVideoTwo from "../assets/Images/video-list-2.jpg";
import NextVideoThree from "../assets/Images/video-list-3.jpg";
import NextVideoFour from "../assets/Images/video-list-4.jpg";
import NextVideoFive from "../assets/Images/video-list-5.jpg";
import NextVideoSix from "../assets/Images/video-list-6.jpg";
import NextVideoSeven from "../assets/Images/video-list-7.jpg";
import NextVideoEight from "../assets/Images/video-list-8.jpg";
import React from 'react';

export default function NextVideo(props) {
  console.log(props.data);
  const videoElements = props.data.map(function(video) {

    return (
      <div className="video-info">
        <h2 className="video-header">NEXT VIDEO</h2>

        <div className="video">
          <img className="video-img" src={NextVideoOne} alt="next-video" />
        
        <div className="title-wrap">
          <h4 className="title">{video.title}</h4>
          <span className="author">{video.channel}</span>
        </div>
        </div>

        <div className="video">
          <img className="video-img" src={NextVideoTwo} alt="next-video-two" />

        <div className="title-wrap">
          <h4 className="title">{video.title}</h4>
          <span className="author">{video.channel}</span>
        </div>
        </div>

        <div className="video">
          <img
            className="video-img"
            src={NextVideoThree}
            alt="next-video-three"
          />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.channel}</h5>
        </div>

        <div className="video">
          <img
            className="video-img"
            src={NextVideoFour}
            alt="next-video-four"
          />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.channel}</h5>
        </div>

        <div className="video">
          <img
            className="video-img"
            src={NextVideoFive}
            alt="next-video-five"
          />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.channel}</h5>
        </div>

        <div className="video">
          <img className="video-img" src={NextVideoSix} alt="next-video-six" />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.channel}</h5>
        </div>

        <div className="video">
          <img
            className="video-img"
            src={NextVideoSeven}
            alt="next-video-seven"
          />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.channel}</h5>
        </div>

        <div className="video">
          <img
            className="video-img"
            src={NextVideoEight}
            alt="next-video-eight"
          />
          <h5 className="title">{video.title}</h5>
          <h5 className="author">{video.channel}</h5>
        </div>
      </div>
    );
  });

  return <section>
            {videoElements}
        </section>;
}








