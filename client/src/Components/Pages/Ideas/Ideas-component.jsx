import React from 'react'
import { Link ,Outlet} from "react-router-dom";
export default function Ideas() {
  return (
    <div>
    <Link to=":prodact"><div>prodact</div></Link>
    <Link to=":prodact"><div>prodact</div></Link>
    <Link to=":prodact"><div>prodact</div></Link>
    <Link to=":prodact"><div>prodact</div></Link>
    <Outlet/>
    </div>
  )
}