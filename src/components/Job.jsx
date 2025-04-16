import React from "react";
import { useParams } from "react-router-dom";

const Job = ({ data }) => {
  const { title } = useParams();

  return (
    <div>
      {data
        .filter((card) => card.title === title)
        .map((card) => (
          <div key={card.id}>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Job;
