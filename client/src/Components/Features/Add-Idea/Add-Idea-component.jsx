import React, { useContext,useState } from "react";
import { UsersContext } from "../../../Context/User/User-context";
import { CreateIdea } from "../../../Services/Ideas-Service";

export default function AddIdea() {
  const { user } = useContext(UsersContext);
  const [idea, setIdea] = useState({ 
    Description:{},
    UserId:user._id
  });

  const AddIdeaToIdeas = (e) => {
    e.preventDefault();
    setIdea({ ...idea });
    console.log(idea);
    CreateIdea(idea, user._id);
  };
  const ChangingDescriptionValue = (e) => {
    idea.Description[e.target.name] = e.target.value;
  };
  const ChangingTheValue = (e) => {
    idea[e.target.name] = e.target.value;
  };
  return (
    <div className="add-idea-container">
      <div className="title">
        <h1>Add Your Own Idea !</h1>


        <form>
          <label htmlFor="">Idea-Title:</label>
          <input type="text" name="IdeaTitle" onChange={ChangingTheValue} />

          <label htmlFor="">Category:</label>
          <input type="text" name="Category" onChange={ChangingTheValue} />

          <label htmlFor="">Whats The Problem?</label>
          <input type="text" name="Problem" onChange={ChangingDescriptionValue} />

          <label htmlFor="">The Solution?</label>
          <input type="text" name="Solution" onChange={ChangingDescriptionValue} />

          <button className="addIdeaBtn" onClick={AddIdeaToIdeas}>
            SEND!
          </button>
        </form>
      </div>
    </div>
  );
}
