import { categories } from "../utils/constants";
import CategoryCard from "./CategoryCard";
const WhatsOnYourMind = () => {
  return (
    <div>
      <div className="category-header">What's on your mind?</div>
      <div className="category-container">
        {categories?.map((imgsrc, index) => (
          <CategoryCard key={index} imgsrc={imgsrc} />
        ))}
      </div>
    </div>
  );
};
export default WhatsOnYourMind;
