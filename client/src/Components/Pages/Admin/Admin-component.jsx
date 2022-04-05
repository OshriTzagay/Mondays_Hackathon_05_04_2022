import React from 'react'
import { Link , Outlet} from "react-router-dom";
export default function Admin() {
  return (
    <div>
    <Link to=":admin"><div>tabel</div></Link>
    <Link to=":admin"><div>details</div></Link>
    <Link to=":admin"><div>decorate</div></Link>
    <Outlet/>
    </div>
  )
}