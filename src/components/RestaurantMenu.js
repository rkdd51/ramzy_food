import { useParams } from "react-router-dom";
import { IMG_CONST_URL } from "../Config/config";
import useFetch from "../utils/useFetch";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  let params = useParams();
  let { id } = params;

  const apiFetchedDataForRestaurantMenu = useFetch(id);
  // \if (!apiFetchedDataForRestaurantMenu) return <Shimmer />;
  return !apiFetchedDataForRestaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center">
        <img
          src={
            IMG_CONST_URL + apiFetchedDataForRestaurantMenu?.cloudinaryImageId
          }
          style={{ height: "200px" }}
          alt="Restaurant Menu"
        />
        <div className="flex flex-col gap-2 px-10">
          <h1 className="font-bold">
            Name : {apiFetchedDataForRestaurantMenu?.name}
          </h1>
          <h1>{apiFetchedDataForRestaurantMenu?.id} : Restaurant id</h1>
          <h1>City : {apiFetchedDataForRestaurantMenu?.city}</h1>
          <h1>Average rating : {apiFetchedDataForRestaurantMenu?.avgRating}</h1>
          <h1>
            Cuisines : {apiFetchedDataForRestaurantMenu?.cuisines.join(",")}
          </h1>
        </div>
      </div>
      <h1 className="font-bold text-3xl mt-3 ">Menu</h1>
      <div className="ml-2">
        {Object.values(apiFetchedDataForRestaurantMenu?.menu?.items).map(
          (val, i) => (
            <div key={i}>
              <li key={val.id}>
                {" "}
                {val?.name}{" "}
                <button className="border border-blue-700 p-2">Add</button>
              </li>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
