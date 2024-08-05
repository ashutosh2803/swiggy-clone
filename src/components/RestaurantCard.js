const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;

  let ratingColor = "good";
  if (avgRating > 4) {
    ratingColor = "good";
  } else if (avgRating > 3 && avgRating < 4) {
    ratingColor = "average";
  } else {
    ratingColor = "bad";
  }
  return (
    <div className="res-card push-on-hover">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="res-description">
        <div className="name">{name}</div>
        <div className="rating-delivery-wrapper">
          <div className={`rating ${ratingColor}`}></div>
          <div>{avgRating}</div>
          <div>
            {deliveryTime}-{deliveryTime + 5} mins
          </div>
        </div>
        <div className="cuisines">{cuisines.join(", ")}</div>
        <div className="costForTwo">₹{costForTwo / 100} for two</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
