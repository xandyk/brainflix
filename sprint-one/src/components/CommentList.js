import React from 'react'
import reviewer from '../assets/Images/vg.png'


export default function CommentList(props) {

  console.log(props.data);
  const commentElements = props.data.map(function(comment){
    
      return (
        <div className="comment-container">
          <img className="comment-avatar" src={reviewer} alt="reviewer" />
          <div className="comment-box">
            <div className="comment-header">
              <h5 className="comment-name">{comment.name}</h5>
              <h5 className="comment-date">{comment.date}</h5>
            </div>
            <p className="comment-comment">{comment.comment}</p>
          </div>
        </div>
      );}
  );

  return (
    <section className="comment-section">
      {commentElements}
    </section>
  )
}
      

