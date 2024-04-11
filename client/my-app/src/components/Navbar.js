import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Button from '@mui/material/Button';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className='logo'>
          <Link className="link" to="/">
            <h1 className="navTitle" >ARTICLE</h1>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <span style={{color: "white"}}>{currentUser?.username}</span>
          {currentUser ? (
            <span style={{color: "white"}} onClick={logout}>Logout</span>
          ) : (
              <div><Link className="link " to="/login">
                <Button className="loginButton1" sx={{ backgroundColor: "#F2613F", color: "#0C0C0C" }} variant="contained">Login</Button>
              </Link>
                <Link className="link " to="/signUp">
                  <Button className="loginButton2 " sx={{ backgroundColor: "white", color: "#F2613F" }} variant="outlined">sign up</Button>
                </Link>
              </div>
            
          )}
          <span style={{color: "white"}} className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;