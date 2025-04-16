import React from "react";
import { Link } from "react-router-dom";

const Jobs = ({ data }) => {
  return (
    <>
      {data.map((jobs) => (
        <div key={jobs.id}>
          <h4>{jobs.title}</h4>
          <Link to={`/jobs/${jobs.title}`}>View more</Link>
        </div>
      ))}
    </>
  );
};

export default Jobs;
