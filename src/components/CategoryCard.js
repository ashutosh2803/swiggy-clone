const CategoryCard = ({ imgsrc }) => {
  return (
    <div className="category-card push-on-hover">
      <img className="category-logo" alt="res-logo" src={imgsrc} />
    </div>
  );
};
export default CategoryCard;
