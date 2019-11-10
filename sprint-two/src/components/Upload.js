import React from 'react'
import uploadImg from "../assets/Images/Upload-video-preview.jpg";

export default function Upload() {
    return (
      <div className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <h4 className="upload__header">VIDEO THUMBNAIL</h4>
        <img className="upload__img" src={uploadImg} alt="upload-video" />

        git 
        <h4 className="upload__label">TITLE YOUR VIDEO</h4>
        <input
          className="upload__input"
          name="upload-box"
          type="text"
          value="Add a title to your video"
        ></input>

        <h4 className="upload__label">ADD A VIDEO DESCRIPTION</h4>
        <input
          className="upload__description"
          name="upload-box"
          type="text"
          value="Add a description of your video"
        ></input>
        </div>
        
        <div className="upload__button-container">
          <button className="upload__publish">PUBSLISH</button>
          <button className="upload__cancel">CANCEL</button>
        </div>
      </div>
    );
}
