import React,{useState,useEffect} from 'react'
import {GetIdeaByType} from "../../../Services/Ideas-Service" ;
import { useParams } from "react-router-dom";
export default function IdeasByCategory() {
  const {type}=useParams()
const [ideas,setIdeas]=useState([])
useEffect(()=>{
    const loadIdeas = async () => {
        const Ideas = await GetIdeaByType("prodact");
        setIdeas(Ideas);
      };
      
      loadIdeas();
},[])
  return (
    <div>{ideas.map((idea,i)=>{
return <h1 key={i}>{idea.IdeaTitle}</h1>
    })}</div>
  )
}
