import React,{useState,useContext,useEffect} from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import {Link} from "react-router-dom"
import {BiUpvote} from "react-icons/bi";
import {BiDownvote} from "react-icons/bi";
import { UsersContext } from "../../../Context/User/User-context";
import {UpdateIdea} from "../../../Services/Ideas-Service"
import "./Idea.css"
export default function Idea ({idea}){
    const {user}=useContext(UsersContext);
const [likes,setLikes]=useState(false)
useEffect(() => {
    if(idea.Likes==null){
      idea.Likes=[];
      if(idea.Likes.includes(user._id)){
        setLikes(true)
    
      }
    }
    else if(idea.Likes.includes(user._id)){
      setLikes(true)
     
    }
    
    else{setLikes(false)
  
    }
  },[])
const Like=()=>{

    UpdateIdea(idea._id,{$push:{Likes:user._id}}).then(()=>{setLikes(true)})
  }
  const UnLike=()=>{

   const newLikes=idea.Likes.filter(like=>like != user._id)
    UpdateIdea(idea._id,{Likes:newLikes}).then(()=>{setLikes(false)})
  }
return (

  <Card className="Card" sx={{  marginTop:"15px" ,marginLeft:"auto" ,marginRight:"auto" }} >
      <CardHeader
      sx={{cursor:"pointer"}}
        avatar={
          <Avatar sx={{ bgcolor: red[500],width:"80px",height:"80px"}} aria-label="recipe">
           {/* <Link  className="avatar" to={`/profile/${idea.UserId._id}`} ><img src={idea.UserId.ProfilePic}/></Link>  */}
          </Avatar>
        }
        title={`${idea.IdeaTitle}-${idea.Category}`}
        subheader={idea.createdAt}
      />
    
      <CardContent>
        <Typography variant="body2" color="text.secondary" maxHeight="90px" overflow="hidden">
      { idea.Description.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {!likes && <IconButton aria-label="like" >
        <BiUpvote onClick={Like}/>
        </IconButton>}
        {likes &&<IconButton aria-label="Like" >
         <BiDownvote onClick={UnLike}/>
        </IconButton>}
        <IconButton aria-label="like" >
        {idea.Likes.length}
        </IconButton>
        <IconButton aria-label="like" >
       <Link to={`/idea/${idea._id}`}>see more</Link>
        </IconButton>
      </CardActions>
    </Card>
)
}