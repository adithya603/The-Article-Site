import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Menu({ cat }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://the-article-site.vercel.app/api/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className='menu-outer'>
      <h1 className='menu-header'>Other posts you may like :</h1>
      <div className='menu'>
        {posts.map(post => (
          <div className='post' key={post.id}>
            <img src={post.img} alt='' />
            <h2>{post.title}</h2>
            <button ><Link className='link' to={`/post/${post.id}`}>Read more</Link></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu