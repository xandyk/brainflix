import React, { Component } from 'react'
import uploadImg from "../assets/Images/Upload-video-preview.jpg";
import Header from './Header';
import axios from 'axios';


export default class Upload extends Component {

  myUpload = () => {
    console.log(this.title.value);

    axios.post('http://localhost:5000/videos', {
      title: this.title.value,
      description: this.description.value
    })
  }

  render() {
    return (
      < >
        <Header />
        <div className="upload">
          <h1 className="upload__title">Upload Video</h1>
          <h4 className="upload__header">VIDEO THUMBNAIL</h4>
          <img className="upload__img" src={uploadImg} alt="upload-video" />

          <h4 className="upload__label">TITLE YOUR VIDEO</h4>
          <input ref={ref => (this.title=ref)}
          className="upload__input"
          name="upload-box"
          type="text"
          placeholder="Add a title to your video"></input>

          <h4 className="upload__label">ADD A VIDEO DESCRIPTION</h4>
          <input ref={ref => (this.description=ref)}
          className="upload__description"
          name="upload-box"
          type="text"
          placeholder="Add a description of your video">
          </input>
        </div>
  
        <div className="upload__button-container">
          <button className="upload__publish" onClick={this.myUpload}>PUBLISH</button>
          <button className="upload__cancel">CANCEL</button>
        </div>
      </>
    )
  }
}
