import React, { useState, useEffect } from "react";
import { GetIdeaByType } from "../../../Services/Ideas-Service";
import { useParams } from "react-router-dom";
import Idea from "./Idea";
import TopFive from "../../Features/TopFive/TopFive";
export default function IdeasByCategory() {
  const { type } = useParams();
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    const loadIdeas = async () => {
      const Ideas = await GetIdeaByType(type);
      setIdeas(Ideas);
    };
    loadIdeas();
    console.log(type);
  }, []);

  return (
    <div className="ideas-container">
      <div className="Top">
        <TopFive />
      </div>

      <div className="ideasHolder">
        {ideas.map((idea, i) => {
          return (
            <div className="ideasCards" key={i}>
              <Idea idea={idea} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
