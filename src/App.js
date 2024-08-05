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
