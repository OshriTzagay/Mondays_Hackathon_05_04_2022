import React, { useEffect, useState } from "react";
import { GetAll } from "../../../Services/User-Service";

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
    <div>
          {user.map((users) => (
        <div>
          <img src={users.ProfilePic} alt="users Pic" />
          <h2>
            {users.FirstName} {users.LastName}
          </h2>
          <h3>{users.Age}</h3>
          <h3>{users.Email}</h3>
          <h3>{users.Position}</h3>
          <h3>{users.Rank}</h3>
         
        </div>
      ))} 
    </div>
  );
};
export default TopFive;
