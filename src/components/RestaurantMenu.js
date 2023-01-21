import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CONST_URL } from "../Config/config";
const RestaurantMenu = () => {
  let params = useParams();
  let { id } = params;
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  async function getRestaurantMenu() {
    let apiCall = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&submitAction=ENTER`
    );
    let json = await apiCall.json();

    setRestaurantMenu(json.data.cards[0].card.card.info);
    console.log("json.data: ", json.data.cards[0].card.card.info);
  }
  useEffect(() => {
    getRestaurantMenu();
  }, []);
  return (
    <div>
      <h1>{restaurantMenu?.id} : Restaurant id</h1>
      <img
        src={IMG_CONST_URL + restaurantMenu?.cloudinaryImageId}
        style={{ height: "200px" }}
        alt="Restaurant Menu"
      />
      <h1>Name : {restaurantMenu?.name}</h1>
      <h1>Average rating : {restaurantMenu?.avgRating}</h1>
    </div>
  );
};

export default RestaurantMenu;
