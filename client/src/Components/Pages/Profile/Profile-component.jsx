import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../../../Context/User/User-context";
import { GetIdeaById } from "../../../Services/Ideas-Service";
import { GetUserById } from "../../../Services/User-Service";
import ProfileDetails from "./Profile-Details"
// import { GetAll } from '../../../Services/User-Service';

export default function Profile() {
  const { user, setUser } = useContext(UsersContext);
  const {id}=useParams()
  const [userIdea, setUserIdea] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() =>{
      const loadCurrentUser=  async ()=>{
       const newUser=await GetUserById(id);
        setCurrentUser(newUser.Chosen_User);
      }
      loadCurrentUser()

  } , []);

  return (
    <>
  {currentUser.Ideas &&  <ProfileDetails currentUser={currentUser}/>}
    </>
  );
}
