
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../Context/User/User-context";
import "./NavBar.css";


export default function Navbar() {
  const { user, setUser } = useContext(UsersContext);
  return (
    <div className="the-navbar">
      <Link className="nav-links" to="/">LOGIN||</Link>
      <Link className="nav-links" to="home">HOME||</Link>
      <Link className="nav-links" to="ideas">POSTS||</Link>
      <Link className="nav-links" to={`profile/${user._id}`}>PROFILE||</Link>
    </div>

  );
}
