import React from 'react'


export default function CommentList(props) {
console.log(props.data);
  let commentElements = props.data && 
  props.data.map(function(comment){
      return (
        <div className="comment-content">
          <div>
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
      
 
    // return(
    //   <div className="comment-list">
    //     { commentList }
    //   </div>
      
        // <h4> {props.commentContainer}</h4>
        // <span>{props.commentContainer}</span>
        // <p>{props.commentContainer}</p>
      

