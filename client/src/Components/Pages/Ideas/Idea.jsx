import React from "react"
import "./Idea.css"
export default function Idea ({idea}){

return (
    <div className="cardIdea">
    <h2 className="inputIdea">{idea.IdeaTitle}</h2>
    <h5 className="inputIdea">Category : {idea.Category}</h5>

    {/* <h5 className="inputIdea">Description : {idea.Description.text? idea.Description.text :idea.Description}</h5> */}

    <h5 className="inputIdea">Likes : {idea.Likes}</h5>
    <h5 className="inputIdea">Status : {idea.Status}</h5>
  </div>
)
}