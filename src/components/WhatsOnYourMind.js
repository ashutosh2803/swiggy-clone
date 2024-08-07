import { useEffect, useState } from "react";
import { categories } from "../utils/constants";
import CategoryCard from "./CategoryCard";
import Shimmer from "./Shimmer";
const WhatsOnYourMind = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    setInterval(() => setCategoriesData(categories), 1000);
    return clearInterval();
  }, []);
  return (
    <div>
      <div className="category-header">What's on your mind?</div>
      {categoriesData.length === 0 ? (
        <Shimmer count={10} type="categoryCard" />
      ) : (
        <div className="category-container">
          {categoriesData?.map((imgsrc, index) => (
            <CategoryCard key={index} imgsrc={imgsrc} />
          ))}
        </div>
      )}
    </div>
  );
};
export default WhatsOnYourMind;
