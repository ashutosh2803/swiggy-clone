import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./utils/constants";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WhatsOnYourMind from "./components/WhatsOnYourMind";
import RestaurantCard from "./components/RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <SearchBar />
      <WhatsOnYourMind />
      <div className="res-header">
        Restaurants with online food delivery in Bangalore
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
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
