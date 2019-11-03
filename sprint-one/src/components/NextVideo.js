import React from 'react';

export default function NextVideo(props) {

  console.log(props.data);
  const videoElements = props.data.map(function(video) {

    return (
      <div className="video-info">

        <div className="video">
          <img className="video-img" src={video.image} alt="next-video" />
        
        <div className="title-wrap">
          <h5 className="title">{video.title}</h5>
          <span className="author">{video.channel}</span>
        </div>
        </div>
      </div>
    );}
  );

  return (
    <section>
      <div className="video-info">
        <h4 className="video-header">NEXT VIDEO</h4>
        {videoElements}
      </div>
    </section>
  )      
}