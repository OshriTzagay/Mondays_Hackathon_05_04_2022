
import React from 'react';
import "./Idea.css"
import { Link ,Outlet} from "react-router-dom";
import StickyLight from '../../Features/StickyLight/StickLight-component';

export default function Ideas() {
  return (
    <div>
      <div className="inner-nav">
      <StickyLight/>

    <Link to="prodact"><div>prodact</div></Link>
    <Link to="oshry"><div>osry</div></Link>
    <Link to="prodact"><div>prodact</div></Link>
    <Link to="prodact"><div>prodact</div></Link>
    </div>
 {   <Outlet/>?<Outlet/>:<div>hello</div>}
    </div>
  )
}