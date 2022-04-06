import React, { useEffect, useState } from "react";
import { GetAll } from "../../../Services/User-Service";
import './TopFive.css';
const TopFive = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    GetAll()
      .then((data) => setUser(data.sort((a,b) => {
        return b.Rank-a.Rank;
      })))
      .catch((err) => console.log(err))
  }, []);
  const five = [];
  return (
    <>
    <img className="" src="https://e7.pngegg.com/pngimages/93/768/png-clipart-five-gold-stars-illustration-united-states-5-star-award-5-star-text-computer-wallpaper-thumbnail.png"
    alt="star" />
    {/* <h1>The Top </h1> */}
    <div className="TopFive">
          {user.map((users) => (
        <div className="top5cards">
          <img className="imgProfile" src={users.ProfilePic} alt="users Pic" />
          <h5>
            {users.FirstName} {users.LastName}
          </h5>
          <p>{users.Email}<br/>
          {users.Position}<br/>
          <img className="imgLike" src="https://img.favpng.com/15/19/13/thumb-signal-computer-icons-icon-design-hand-png-favpng-cgh9TJneUPAcpcfYuz1ZwJg3r.jpg" 
    alt="likes"/>  {users.Rank}</p>
         
        </div>
      ))} 
    </div>
    </>
  );
};
export default TopFive;
