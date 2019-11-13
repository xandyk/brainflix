import React from 'react';
import { Link } from 'react-router-dom'

export default function NextVideo(props) {

  console.log(props.data);
  const videoElements = props.data.map(function(video, index) {

    if(props.videoID === video.id) {
      return null;
    } else { 
      return (
      // <div className="video-info">
        <div className="video" key={index}>
          <Link className="video-row" to={"/videos/" + video.id}>
            <img className="video-img" src={video.image} alt="next-video" />

            <div className="title-wrap">
              <h5 className="title">{video.title}</h5>

              <span className="author">{video.channel}</span>
            </div>
          </Link>
        </div>
      // </div>
      );}
    }
  );

  return (
    <section className="video-section">
        <h4 className="video-header">NEXT VIDEO</h4>
        {videoElements}
    </section>
  )      
}

