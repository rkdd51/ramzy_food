import { useEffect, useState } from "react";

const useBodyApiCall = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  async function getRestaurant() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await apiData.json();
    // console.log("json: ", json);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    getRestaurant();
  }, []);
  return { allRestaurant, filteredRestaurant, setFilteredRestaurant };
};
export default useBodyApiCall;
