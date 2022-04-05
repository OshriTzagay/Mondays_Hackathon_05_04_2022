import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetUserById } from "../../../Services/User-Service";
import ProfileDetails from "./Profile-Details";
import './Profile.css'

export default function Profile() {
  const {id}=useParams()
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
