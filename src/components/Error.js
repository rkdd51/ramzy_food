import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  // console.log(useRouteError());
  let error = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <h1>{error.status}</h1>
      <h1>{error.statusText}</h1>
    </div>
  );
};

export default Error;
