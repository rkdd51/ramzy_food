import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { data } = useContext(UserContext);
  console.log("user: ", data);

  return (
    <>
      <div>Footer</div>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
    </>
  );
};

export default Footer;
