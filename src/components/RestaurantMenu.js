import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CONST_URL } from "../Config/config";
import useFetch from "../utils/useFetch";
const RestaurantMenu = () => {
  let params = useParams();
  let { id } = params;

  const apiFetchedDataForRestaurantMenu = useFetch(id);

  return (
    <div>
      <h1>{apiFetchedDataForRestaurantMenu?.id} : Restaurant id</h1>
      <img
        src={IMG_CONST_URL + apiFetchedDataForRestaurantMenu?.cloudinaryImageId}
        style={{ height: "200px" }}
        alt="Restaurant Menu"
      />
      <h1>Name : {apiFetchedDataForRestaurantMenu?.name}</h1>
      <h1>Average rating : {apiFetchedDataForRestaurantMenu?.avgRating}</h1>
      <h1>Cuisines : {apiFetchedDataForRestaurantMenu?.cuisines.join(",")}</h1>
    </div>
  );
};

export default RestaurantMenu;
