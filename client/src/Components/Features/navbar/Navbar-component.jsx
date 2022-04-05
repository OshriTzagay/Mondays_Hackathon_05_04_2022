import { Link } from "react-router-dom";

import "./NavBar.css"

import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../Context/User/User-context";
import "./NavBar.css";
import { MdLogout } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';




export default function Navbar() {
  const { user, setUser } = useContext(UsersContext);
  return (
    <div className="the-navbar">
      <div className="left-nav">
      <Link className="nav-links" to="home">ICON</Link>
      <Link className="nav-links" to="home">HOME</Link>
      {/* <Link className="nav-links" to="/">LOGIN</Link> */}
      <Link className="nav-links" to="ideas">POSTS</Link>

      </div>

      <div className="right-nav">

      <Link className="nav-links" to={`profile/${user._id}`}><CgProfile/></Link>
      <Link className="nav-links" to="/"><MdLogout/></Link>

      </div>

      
    </div>

  );
}
// localStorage.clear();
// setUser({});