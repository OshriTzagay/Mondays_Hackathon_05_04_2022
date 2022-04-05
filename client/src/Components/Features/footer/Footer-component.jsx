import './Footer.css';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="secFooter">
            <article className="artOneOfFooter"> 
                <h1>here you have say to say</h1>
            </article>
            <article className="artTwoOfFooter">
                <h3> Category :</h3>
                <h5>category1</h5> 
                 <h5>category2</h5>
                 <h5>category3</h5> 
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
