const Shimmer = ({ count, type }) => {
  const cardClass =
    type === "restaurantCard"
      ? "shimmerRestaurantCard"
      : type === "categoryCard"
      ? "shimmerCategoryCard"
      : "";
  const containerClass =
    type === "restaurantCard"
      ? "shimmer-restaurant-container"
      : type === "categoryCard"
      ? "shimmer-category-container"
      : "";
  return (
    <div className={containerClass}>
      {[...Array(count)].map((e, i) => (
        <div className={cardClass} key={i}></div>
      ))}
    </div>
  );
};

export default Shimmer;
