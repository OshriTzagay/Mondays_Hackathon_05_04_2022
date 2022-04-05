import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../../../Context/User/User-context";
import { GetIdeaById } from "../../../Services/Ideas-Service";
import { GetUserById } from "../../../Services/User-Service";
// import { GetAll } from '../../../Services/User-Service';

export default function ProfileDetails({currentUser}) {

  return (
    <div>
      Profile
      <img src={currentUser.ProfilePic} alt="currentUser Pic" />
      <h1>
        {currentUser.FirstName} {currentUser.LastName}
      </h1>
      <h3>{currentUser.Age}</h3>
      <h3>{currentUser.Email}</h3>
      <h3>{currentUser.Position}</h3>
      {console.log(currentUser.Ideas)}
        {currentUser.Ideas.map((post ,i) => 
        <div className="cardPost" key={i}>
          <h1>Title : {post.IdeaTitle}</h1>
          <h1>Category : {post.Category}</h1>
          <h1>Description : {post.Description}</h1>
          <h1>Likes : {post.Likes}</h1>
          <h1>Status : {post.Status}</h1>
        </div>
      )}  
      {/* post : {userIdea} */}
      {/* FirstName,LastName,Age,Ideas, Email,Position,Password,Rank,LastLogin,isLogin,isAdmin,Role,ProfilePic, */}
    </div>
  );
}
