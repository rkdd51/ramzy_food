import React from "react";
import "../index.css";
const Shimmer = () => {
  return (
    <div className="resCard">
      {Array(20)
        .fill("")
        .map((e, i) => (
          <div className="shimmer" key={i}></div>
        ))}
    </div>
  );
};

export default Shimmer;
