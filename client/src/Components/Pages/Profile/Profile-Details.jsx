import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../../../Context/User/User-context";
import { GetIdeaById } from "../../../Services/Ideas-Service";
import { GetUserById } from "../../../Services/User-Service";
// import { GetAll } from '../../../Services/User-Service';

export default function ProfileDetails({ currentUser }) {
  return (
    <>
      <div className="DetailsUser">
        <img src={currentUser.ProfilePic} alt="currentUser Pic" />
        <h2>
          {currentUser.FirstName} {currentUser.LastName}
        </h2>
        <h3>{currentUser.Age}</h3>
        <h3>{currentUser.Email}</h3>
        <h3>{currentUser.Position}</h3>
        {console.log(currentUser.Ideas)}
      </div>
      {currentUser.Ideas.map((post, i) => (
        <div className="userPosts" key={i}>
          <div className="cardPost">
            <h2 className="inputPost">{post.IdeaTitle}</h2>
            <h5 className="inputPost">Category : {post.Category}</h5>
            {/* <h5 className="inputPost">Description : {post.Description.text? post.Description.text :post.Description}</h5> */}

            <h5 className="inputPost">Likes : {post.Likes}</h5>
            <h5 className="inputPost">Status : {post.Status}</h5>
            <h1>{post.Description.text}</h1>
          </div>
        </div>
      ))}
    </>
  );
}
