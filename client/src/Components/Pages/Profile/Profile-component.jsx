import React, { useEffect, useState } from 'react'
import { GetAll } from '../../../Services/User-Service';

export default function Profile() {
  let [userData, setUserData] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  useEffect(() => {
    GetAll()
      .then(data => setUserData(data))
  } , []); 
  return (
    <div>Profile
      <img src={user.ProfilePic} alt="user Pic" />
      <h1>{user.FirstName} {user.LastName}</h1>
      <h3>{user.Age}</h3>
      <h3>{user.Email}</h3>
      <h3>{user.Position}</h3>
      
{/* FirstName,LastName,Age,Ideas, Email,Position,Password,Rank,LastLogin,isLogin,isAdmin,Role,ProfilePic, */}



    </div>
  )
}
