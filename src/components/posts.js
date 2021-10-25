import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      let resp = await fetch(
        "https://broad-star-50cd.hunar-jain.workers.dev/posts",{method:'GET'}
      );
      // console.log(resp.status)
      const postsResp = await resp.json();
      console.log(postsResp);
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post,index) => (
        <div key={index}>
          <h2>
            <Link to={`/posts/${index}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;