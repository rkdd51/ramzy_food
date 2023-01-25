import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import RestaurantsCard from "./RestaurantsCard";
// import { restaurantList } from "../Config/config";
import Shimmer from "./Shimmer";
import useBodyApiCall from "../utils/useBodyApiCall";
import useOnline from "../utils/useOnline";
function filterData(searchInput, localRestaurant) {
  let filteredValues = localRestaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filteredValues;
}
const Body = () => {
  const [searchInput, setSearchInput] = useState("");

  let { allRestaurant, filteredRestaurant, setFilteredRestaurant } =
    useBodyApiCall();
  // if (filteredRestaurant.length === 0) return <h1>No such restaurant found</h1>;
  // if (allRestaurant.length === 0) return null;
  const online = useOnline();
  if (!online) {
    return <h1>Hey , Please check your internet connection</h1>;
  }
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
