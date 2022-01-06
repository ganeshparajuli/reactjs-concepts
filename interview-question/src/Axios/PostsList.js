import React from "react";

function PostsList({ posts }) {
  const post = posts.filter((item) => item.id === 2);
  console.log("post data is: ",post)

  return (
    <div>
        <p>post data is: </p>
      {post.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

export default PostsList;
