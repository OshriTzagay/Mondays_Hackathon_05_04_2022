import React,{useState} from "react";
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
import "./Idea.css"
export default function Idea ({idea}){
const [likes,setLikes]=useState(true)
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
        {likes && <IconButton aria-label="like" >
        <BiUpvote/>
        </IconButton>}
        {!likes &&<IconButton aria-label="like" >
          like
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