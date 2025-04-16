import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home Hello to me
      <p>Flashy</p>
      <Link to="jobs">View Jobs</Link>
    </div>
  );
};

export default Home;
