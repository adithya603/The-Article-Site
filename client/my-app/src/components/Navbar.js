import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Button from '@mui/material/Button';
import usrImg from "../images/userImg2.png"

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  function handleIconClick() {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className='logo'>
          <Link className="link" to="/">
            <h1 className="navTitle" >ARTICLE</h1>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=life">
            <h6>LIFE</h6>
          </Link>
          <Link className="link" to="/?cat=sports">
            <h6>SPORTS</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?cat=literature">
            <h6>LITERATURE</h6>
          </Link>
          {currentUser ? (
            <div className="navMod">
              <Link className="link " to="/write">
                <Button className="loginButton1" sx={{ backgroundColor: "#F2613F", color: "#0C0C0C" }} variant="contained">Post</Button>
              </Link>
              <div className={`user-icon ${isOpen ? 'active' : ''}`} onClick={handleIconClick}>
                <img src={usrImg} alt="Profile" className="profile-image" />
                {isOpen && (
                  <div className="dropdown-menu">
                    <ul className="profileOptions">
                      <li><Link to="/user" className="link">Go to profile</Link></li>
                      <li><Link onClick={logout} className="link">Logout</Link></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>) : (
            <div><Link className="link " to="/login">
              <Button className="loginButton1" sx={{ backgroundColor: "#F2613F", color: "#0C0C0C" }} variant="contained">Login</Button>
            </Link>
              <Link className="link " to="/signUp">
                <Button className="loginButton2 " sx={{ backgroundColor: "white", color: "#F2613F" }} variant="outlined">sign up</Button>
              </Link>
            </div>

          )}

          {/* <span style={{ color: "white" }} className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span> */}

        </div>
      </div>
    </div>
  );
};

export default Navbar;