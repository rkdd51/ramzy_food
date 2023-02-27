import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import RestaurantsCard from "./RestaurantsCard";
// import { restaurantList } from "../Config/config";
import Shimmer from "./Shimmer";
import useBodyApiCall from "../utils/useBodyApiCall";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body = () => {
  const { data, setData } = useContext(UserContext);
  console.log("ser, setUser: ", data, setData);
  let { allRestaurant, filteredRestaurant, setFilteredRestaurant } =
    useBodyApiCall();
  const online = useOnline();
  const [searchInput, setSearchInput] = useState("");
  function filterData(searchInput, allRestaurant) {
    let filteredValues = allRestaurant?.filter((res) =>
      res?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filteredValues;
  }

  if (!online) {
    return (
      <h1 className="font-bold text-2xl m-20">
        Bhai apka internet check kar lo ek bar
      </h1>
    );
  }

  return online && allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="mt-2 p-2">
        <input
          className="border border-slate-900 p-2"
          type="text"
          placeholder="Search Restaurant"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="border-slate-80 p-2 bg-purple-400 rounded-md ml-3"
          onClick={() => {
            let data = filterData(searchInput, allRestaurant);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <input
        className="bg-red-100 border border-black m-2 p-1 rounded-lg"
        value={data.name}
        onChange={(e) =>
          setData({
            name: e.target.value,
            email: "rdubey@gmail.com",
          })
        }
      />
      <div className="flex flex-wrap ">
        {filteredRestaurant.length === 0 ? (
          <h1>No data found</h1>
        ) : (
          filteredRestaurant.map((valuesOfRestaurantList) => {
            return (
              <NavLink
                to={"restaurant/" + valuesOfRestaurantList.data.id}
                key={valuesOfRestaurantList.data.id}
              >
                <RestaurantsCard {...valuesOfRestaurantList.data} />
              </NavLink>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
