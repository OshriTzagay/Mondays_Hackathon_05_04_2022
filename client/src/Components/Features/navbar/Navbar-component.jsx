
import { Link } from "react-router-dom";

import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../../../Context/User/User-context";
export default function Navbar() {
  const { user, setUser } = useContext(UsersContext);
  return (
    <div>
      <Link  to="/" className="nav-links">LOGIN||</Link>
      <Link  to="home" className="nav-links">HOME||</Link>
      <Link  to="ideas"className="nav-links">POSTS||</Link>
      <Link  to={`profile/${user._id}`}className="nav-links">PROFILE||</Link>
    </div>
    
  );
}
