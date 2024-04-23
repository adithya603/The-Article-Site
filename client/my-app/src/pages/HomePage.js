import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="home">

      <div className="posts">
        <h1 className="topPosts">Top Posts</h1>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img shrink">
            <Link to={`/post/${post.id}`}><img src={post.img} alt="" /></Link>
            </div>
            <div className="content">
              <h1>
                <Link className="link titleHome" to={`/post/${post.id}`}>
                  {post.title}
                </Link>
              </h1>
              <p>{getText(post.shortDesc)}</p>
              <Link className="read-more" to={`/post/${post.id}`}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
