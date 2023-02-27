import React from "react";
//import { IMG_CONST_URL } from "../Config/config";

const FoodItem = ({ name, price, cloudinaryImageId }) => {
  return (
    <>
      <div className=" border  border-slate-600 m-2 p-2 w-[200px] h-auto hover:bg-red-100">
        {/* <img
          className="w-[200px] h-[200px]"
          alt="images"
          src={IMG_CONST_URL + cloudinaryImageId}
        /> */}
        <h3 className="font-bold "> Name - {name}</h3>
        <h3>Price - {price}</h3>
      </div>
    </>
  );
};

export default FoodItem;
