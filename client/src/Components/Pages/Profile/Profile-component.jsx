import React, { useContext, useEffect, useState } from 'react'
import { UsersContext } from '../../../Context/User/User-context';
import { GetIdeaById } from '../../../Services/Ideas-Service';
// import { GetAll } from '../../../Services/User-Service';

export default function Profile() {
  const { user, setUser } = useContext(UsersContext);
  // let [userIdea, setUserIdea] = useState([]);
  // const user = JSON.parse(localStorage.getItem('user'));
  // useEffect(() => {
  //   GetIdeaById(user.id)
  //     .then(Idea => setUserIdea(Idea))
  // } , []); 
  console.log(user);
  return (
    <div>Profile
      <img src={user.ProfilePic} alt="user Pic" />
      <h1>{user.FirstName} {user.LastName}</h1>
      <h3>{user.Age}</h3>
      <h3>{user.Email}</h3>
      <h3>{user.Position}</h3>

      {/* post : {userIdea} */}
   
{/* FirstName,LastName,Age,Ideas, Email,Position,Password,Rank,LastLogin,isLogin,isAdmin,Role,ProfilePic, */}

    </div>
  )
}
