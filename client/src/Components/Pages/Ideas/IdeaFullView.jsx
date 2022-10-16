import react,{useState,useEffect} from 'react';
import Idea from "./Idea";
import {GetIdeaById} from "../../../Services/Ideas-Service";
import {useParams} from "react-router-dom";
import Comments from "./Comments"
export default function IdeaFullView(){
    const {id}=useParams()
    const [idea, setIdea] = useState({});
    useEffect(() =>{
        const loadIdea=  async ()=>{
         const newIdea=await GetIdeaById(id);
         setIdea(newIdea);
        }
        loadIdea()
    } , []);
    return(
        <>
<div className="cardIdea">
    <div className="idea-user">
    </div>
        <h5 className="inputCreate">{idea.createdAt}</h5>
            <h2 className="inputIdea">{idea.IdeaTitle}</h2>
            <h5 className="inputIdea">Category : {idea.Category}</h5>
            {/* <h5 className="inputIdea">Description : {Idea.Description.text? Idea.Description.text :Idea.Description}</h5> */}

            <h5 className="inputIdea">Likes : {idea.Likes}</h5>
            <h5 className="inputIdea">Status : {idea.Status}</h5>
            {/* <h1>{idea.Description.texnm  t}</h1> */}
          </div>
          <Comments ideaId={id}/>
</>
    )
}
