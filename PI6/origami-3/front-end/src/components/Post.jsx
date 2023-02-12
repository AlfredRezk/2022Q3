import React from "react";
import blueBird from "../assets/blue-origami-bird.png";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <img src={blueBird} alt="" />
      <p>{post?.description}</p>

      <div>
        <span>Author: </span>
        {post?.author?.username}
      </div>
    </div>
  );
};

export default Post;
