import './Footer.css';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="secFooter">
            <article className="artOneOfFooter"> 
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76tZ2T3413vt-e7SG3pxpaBr_hsVSPpBj8A&usqp=CAU'
            alt='idea'/>
            </article>
            <article className="artTwoOfFooter">
                <h3> Category :</h3>
                <Link to=":prodact"><div>prodact</div></Link>
                <Link to=":prodact"><div>prodact</div></Link>
                <Link to=":prodact"><div>prodact</div></Link>
            </article>
            <article className="artThreeOfFooter">
              <h3>Pages :</h3>
                 <Link to="home">HOME</Link><br/>
                 <Link to="profile">Profile</Link><br/>
                 <Link to="ideas">POSTS</Link><br/>
                 <br/>
            </article>
        </div>
    </footer>
    
  );
};
