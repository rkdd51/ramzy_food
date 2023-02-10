import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h1>Hey this is about page</h1>
      <Outlet />
    </div>
  );
};

export default About;
