import React, { useEffect, useState } from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import userImg from "../images/userImg2.png"

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="single">
      <div className="content">
        <h1>{post.title}</h1>
        <img src={post?.img} alt="" />
        <div className="user">
          {<Link to="/user"><img
            src={userImg}
            alt=""
          /></Link>}
          <div className="info">
            <span>{post.username}</span>
            <p>{moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: post.desc }} /> {/* //to avoid being enclosed by the p tag */}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;