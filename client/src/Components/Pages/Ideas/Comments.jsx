import react,{useState,useEffect,useContext} from 'react';
import {useParams} from "react-router-dom"
import {GetIdeaComment} from "../../../Services/Comment-Service"
import {CreateComment} from "../../../Services/Comment-Service"
import { UsersContext } from "../../../Context/User/User-context";
import {Link} from "react-router-dom"
import "./Idea.css"
export default function Comments({ideaId}){
    const {user}=useContext(UsersContext);
    const [comments,setComments]=useState([])
    useEffect(()=>{
        const loadComments=async()=>{
           const newComments= await GetIdeaComment(ideaId);
           setComments(newComments);
        }
        loadComments();
        console.log(comments);
        console.log(user);
        
    },[])
    const [comment,setComment]=useState({    
      });
      const onFieldChange = (e) => {
          const { name, value } = e.target;
          setComment({IdeaId:ideaId,UserId:user._id, [name]: value });
          console.log(comment)
          
        };
      const MakeComment= async()=>{
        console.log(comment);
    await CreateComment(comment).then(()=>{alert("comment sent")})}
    return(
        <>
         <div>
          <textarea
            type="text"
            className="idea-commentInput"
            onChange={onFieldChange}
            placeholder="comment on the idea"
            name="Description"
            required={true}
          />
          <div className="comment-btn" >
          <button type="button" onClick={MakeComment}>
            comment
          </button></div>
        </div>
    { comments.map((comment,i)=>{
    return  <div className="idea-comment-box"key={i}> 
      <Link to={`/profile/${comment.UserId._id}`}>
          <span className="commentWriter">{comment.UserId.firstName}{comment.UserId.lastName}</span></Link>
      <p>{comment.Description}</p>
              </div>
     })}
     </>
    )
}