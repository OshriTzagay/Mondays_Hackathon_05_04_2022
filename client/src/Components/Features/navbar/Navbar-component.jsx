import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <Link to="/">LOGIN||</Link>
      <Link to="home">HOME||</Link>
      <Link to="ideas">POSTS||</Link>
      <Link to="profile">PROFILE||</Link>
    </div>
  );
}
