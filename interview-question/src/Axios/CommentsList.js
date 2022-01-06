import React from "react";

function CommentsList({ comments }) {
const comment=comments.filter(item=>item.email==="Eliseo@gardner.biz");
console.log("comments",comments)
  return (
    <div>
      <p>comment data</p>
      {comment.map((item) => (
        <p>{item.email}</p>
      ))}
    </div>
  );
}

export default CommentsList;
