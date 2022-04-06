
import React from 'react';
// import "./Idea.css"
import { Link ,Outlet} from "react-router-dom";
import StickyLight from '../../Features/StickyLight/StickLight-component';
import './ideasComponent.css'
export default function Ideas() {
  return (
    <div className='ideas-container'>
      <div className='heroImg'></div>
      <div className="inner-nav">
      <StickyLight/>


  <div><Link to="prodact"><h1>Products</h1></Link></div>  
   <div> <Link to="BusinessExcellence"><h1>Business Excellence</h1></Link></div>
   <div><Link to="WorkFlow"><h1>Work Flow</h1></Link></div> 
   <div> <Link to="SocialImpact"><h1>Social-Impact</h1></Link></div>
      
    </div>

    </div>
  )
}