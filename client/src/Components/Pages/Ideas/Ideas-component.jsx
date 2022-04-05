
import React from 'react';
import "./Idea.css"
import { Link ,Outlet} from "react-router-dom";

export default function Ideas() {
  return (
    <div>
      <div className="inner-nav">
    <Link to=":prodact"><div>prodact</div></Link>
    <Link to=":prodact"><div>prodact</div></Link>
    <Link to=":prodact"><div>prodact</div></Link>
    <Link to=":prodact"><div>prodact</div></Link>
    </div>
 {   <Outlet/>?<Outlet/>:<div>hello</div>}
    </div>
  )
}