import { Link } from "react-router-dom";

import "./NavBar.css"
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../Context/User/User-context";
export default function Navbar() {
  const { user, setUser } = useContext(UsersContext);
  return (
    <div className="the-navbar">

      <Link className="nav-links" to="/" >LOGIN||</Link>
      <Link className="nav-links" to="home">HOME||</Link>
      {user.isAdmin ?
        <Link className="nav-links" to="admin">Admin||</Link>
        : ''}
      <Link className="nav-links" to="ideas">POSTS||</Link>
      <Link className="nav-links" to={`profile/${user._id}`}>PROFILE||</Link>
    </div>

  );
}
