import { IMG_CONST_URL } from "../Config/config";
const RestaurantsCard = ({
  name,
  area,
  lastMileTravelString,
  totalRatingsString,
  cloudinaryImageId,
}) => {
  return (
    <>
      <div className="border border-slate-600 m-2 p-2 w-[200px] h-[350px] hover:bg-red-100">
        <img
          className="w-[200px] h-[200px]"
          alt="images"
          src={IMG_CONST_URL + cloudinaryImageId}
        />
        <h3 className="font-bold ">{name}</h3>
        <h3>{area}</h3>
        <h3>{lastMileTravelString}</h3>
        <h3>{totalRatingsString}</h3>
      </div>
    </>
  );
};

export default RestaurantsCard;
