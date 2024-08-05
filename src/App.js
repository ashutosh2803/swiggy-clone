import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./utils/constants";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WhatsOnYourMind from "./components/WhatsOnYourMind";
import RestaurantCard from "./components/RestaurantCard";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(resList);

  const HandleShowAll = () => {
    setRestaurantData(resList);
  };
  const handleTopRated = () => {
    const filteredRestaurantData = restaurantData.filter(
      (res) => res.data.avgRating > 4
    );
    setRestaurantData(filteredRestaurantData);
  };
  const handleSortByASC = (field) => {
    const sortedRestaurantData = [...restaurantData].sort((a, b) => {
      // Compare the values of the specified field
      if (a.data[field] < b.data[field]) return -1;
      return 0;
    });
    setRestaurantData(sortedRestaurantData);
  };
  const handleSortByDSC = (field) => {
    const sortedRestaurantData = [...restaurantData].sort((a, b) => {
      // Compare the values of the specified field
      if (a.data[field] > b.data[field]) return -1;
      return 0;
    });
    setRestaurantData(sortedRestaurantData);
  };
  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;

    switch (selectedValue) {
      case "delivery-time":
        handleSortByASC("deliveryTime");
        break;
      case "rating":
        handleSortByDSC("avgRating");
        break;
      case "cost-for-two":
        handleSortByASC("costForTwo");
        break;
      default:
        break;
    }
  };
  return (
    <div className="body">
      <SearchBar />
      <WhatsOnYourMind />
      <div className="res-header">
        Restaurants with online food delivery in Bangalore
      </div>
      <div className="filter">
        <button className="show-all" onClick={HandleShowAll}>
          Show All
        </button>
        <button className="top-rated" onClick={handleTopRated}>
          Top-Rated
        </button>
        <select onChange={(e) => handleSelectChange(e)}>
          <option defaultValue="" disabled>
            Sort by
          </option>
          <option value="delivery-time">Delivery Time</option>
          <option value="rating">Rating</option>
          <option value="cost-for-two">Cost for Two</option>
        </select>
      </div>
      <div className="res-container">
        {restaurantData.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
