import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { data } = useContext(UserContext);
  console.log("user: ", data);

  return (
    <>
      <div className="font-bold text-2xl flex justify-center mt-10">Footer</div>
      ;<p>{data?.name}</p>
      <p>{data?.email}</p>
    </>
  );
};

export default Footer;
