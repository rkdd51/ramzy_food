import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import RestaurantsCard from "./RestaurantsCard";
// import { restaurantList } from "../Config/config";
import Shimmer from "./Shimmer";

function filterData(searchInput, localRestaurant) {
  let filteredValues = localRestaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filteredValues;
}
const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function getRestaurant() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await apiData.json();
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    getRestaurant();
  }, []);
  // if (filteredRestaurant.length === 0) return <h1>No such restaurant found</h1>;
  // if (allRestaurant.length === 0) return null;
  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchInput">
        <input
          type="text"
          placeholder="Search Restaurant"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          onClick={() => {
            let data = filterData(searchInput, allRestaurant);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resCard">
        {filteredRestaurant.length === 0 ? (
          <h1>No result found</h1>
        ) : (
          filteredRestaurant.map((valuesOfRestaurantList) => {
            return (
              <Link
                to={"restaurant/" + valuesOfRestaurantList.data.id}
                key={valuesOfRestaurantList.data.id}
              >
                <RestaurantsCard {...valuesOfRestaurantList.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
