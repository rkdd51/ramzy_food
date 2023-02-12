import { IMG_CONST_URL } from "../Config/config";
import React, { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantsCard = ({
  name,
  area,
  lastMileTravelString,
  totalRatingsString,
  cloudinaryImageId,
}) => {
  const contextValue = useContext(UserContext);

  return (
    <>
      <div className="border border-slate-600 m-2 p-2 w-[200px] h-[350px] hover:bg-red-100">
        <img
          className="w-[200px] h-[200px]"
          alt="images"
          src={IMG_CONST_URL + cloudinaryImageId}
        />
        <h3 className="font-bold ">{name}</h3>
        <h3>{area}</h3>
        <h3>{lastMileTravelString}</h3>
        <h3>{totalRatingsString}</h3>
        <p>{contextValue?.data?.name}</p>
        <p>{contextValue?.data?.email}</p>
      </div>
    </>
  );
};

export default RestaurantsCard;
