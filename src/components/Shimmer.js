import React from "react";
import "../index.css";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e, i) => (
          <div className="bg-gray-300 h-[300px] w-[200px] m-2" key={i}></div>
        ))}
    </div>
  );
};

export default Shimmer;
