import React from 'react'
import reviewer from '../assets/Images/vg.png'


export default function CommentList(props) {
console.log(props.data);
  const commentElements = props.data.map(function(comment){
      return (
        <div className="comment-container">
          <img className="comment-avatar" src={reviewer} />
          <div className="comment-data">
            <h5 className="name">{comment.name}</h5>
            <h5 className="date">{comment.date}</h5>
            <p className="comment">{comment.comment}</p>
          </div>
        </div>
      );}
  );

  return (
    <section>
      {commentElements}
    </section>
  )
}
      

