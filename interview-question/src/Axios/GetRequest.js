import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1/comments";

export default function GetRequest() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
console.log("post",post)
  return (
    <div>
      {post.map(item=>(
        <p>{item.email}</p>
      ))
      }
    </div>
  );
}