import React,{useState,useEffect} from 'react'
import {GetIdeaByType} from "../../../Services/Ideas-Service" ;
import { useParams } from "react-router-dom";
import Idea from "./Idea"
export default function IdeasByCategory() {
  const {type}=useParams()
const [ideas,setIdeas]=useState([])
useEffect(()=>{ 
    const loadIdeas = async () => {
      const Ideas = await GetIdeaByType(type);
      setIdeas(Ideas);
    };   
    loadIdeas();
    console.log(type);
},[])
  return (
    <div className="ideasHolder">{ideas.map((idea,i)=>{
return <h1 key={i}><Idea idea={idea}/></h1>
    })}</div>
  )
}
