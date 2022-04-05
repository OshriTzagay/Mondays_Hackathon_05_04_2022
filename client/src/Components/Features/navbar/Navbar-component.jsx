import React from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../../Context/User/User-context";
import './NavBar.css'

export default function Navbar() {

  return (
    <div className="the-navbar">
      <Link className="nav-links" to="/">LOGIN</Link>
      <Link className="nav-links" to="home">HOME</Link>
      <Link className="nav-links" to="ideas">POSTS</Link>
      <Link className="nav-links" to="profile">PROFILE</Link>
    </div>
    
  );
}
