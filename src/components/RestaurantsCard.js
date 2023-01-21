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
      <div className="card">
        <img
          className="imageOfCard"
          alt="images"
          src={IMG_CONST_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h3>{area}</h3>
        <h3>{lastMileTravelString}</h3>
        <h3>{totalRatingsString}</h3>
      </div>
    </>
  );
};

export default RestaurantsCard;
