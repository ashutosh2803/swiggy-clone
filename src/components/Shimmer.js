const Shimmer = ({ count, type }) => {
  const cardClass =
    type === "restaurantCard"
      ? "shimmerRestaurantCard"
      : type === "categoryCard"
      ? "shimmerCategoryCard"
      : "";
  return (
    <div className="shimmer-container">
      {[...Array(count)].map((e, i) => (
        <div className={cardClass} key={i}></div>
      ))}
    </div>
  );
};

export default Shimmer;
