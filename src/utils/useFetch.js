import { useEffect, useState } from "react";

const useFetch = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    let apiCall = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&submitAction=ENTER`
    );
    let json = await apiCall.json();
    setRestaurantMenu(json.data.cards[0].card.card.info);
  }
  return restaurantMenu;
};

export default useFetch;
