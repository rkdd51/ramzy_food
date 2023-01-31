import { useEffect, useState } from "react";

const useFetch = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    let apiCall = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=18.5204303&lng=73.8567437&menuId=${id}`
    );
    let json = await apiCall.json();
    // eslint-disable-next-line no-lone-blocks

    // console.log("json: ", Object.values(json.data.menu.items));

    setRestaurantMenu(json.data);
  }
  return restaurantMenu;
};

export default useFetch;
