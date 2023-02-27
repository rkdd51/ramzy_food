import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { data } = useContext(UserContext);
  console.log("user: ", data);

  return (
    <div className="font-bold text-2xl flex justify-center mt-10">
      <div> Footer</div>
      <p>{data?.name}</p>
      <p>{data?.email}</p>
    </div>
  );
};

export default Footer;
