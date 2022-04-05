
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../Context/User/User-context";
export default function Navbar() {
  const { user, setUser } = useContext(UsersContext);
  return (
    <div>
      <Link to="/">LOGIN||</Link>
      <Link to="home">HOME||</Link>
      <Link to="ideas">POSTS||</Link>
      <Link to={`profile/${user._id}`}>PROFILE||</Link>
    </div>
  );
}
