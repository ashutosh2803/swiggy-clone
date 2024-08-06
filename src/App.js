import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./utils/constants";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WhatsOnYourMind from "./components/WhatsOnYourMind";
import RestaurantCard from "./components/RestaurantCard";
import Shimmer from "./components/Shimmer";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState(resList);
  const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantData);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // fetchData();
    // setInterval(() => {
    //   setFilteredRestaurant(resList);
    // }, 1000);
    // return clearInterval();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";

    for (const cardObj of arrayOfCards) {
      if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantData(resData);
        setFilteredRestaurant(resData);
      }
    }
  };
  const handleSetFilteredRestaurant = ({ response }) => {
    setFilteredRestaurant(response);
  };
  const HandleShowAll = () => {
    setFilteredRestaurant(resList);
  };
  const handleTopRated = () => {
    const filteredRestaurantData = restaurantData.filter(
      (res) => res.data.avgRating > 4
    );
    setFilteredRestaurant(filteredRestaurantData);
  };
  const handleSortByASC = (field) => {
    const sortedRestaurantData = [...restaurantData].sort((a, b) => {
      // Compare the values of the specified field
      if (a.data[field] < b.data[field]) return -1;
      return 0;
    });
    setFilteredRestaurant(sortedRestaurantData);
  };
  const handleSortByDSC = (field) => {
    const sortedRestaurantData = [...restaurantData].sort((a, b) => {
      // Compare the values of the specified field
      if (a.data[field] > b.data[field]) return -1;
      return 0;
    });
    setFilteredRestaurant(sortedRestaurantData);
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
      <div className="searchInputWrapper">
        <input
          className="searchInput"
          type="text"
          value={searchQuery}
          placeholder="focus here to search"
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button
          className="searchButton"
          onClick={() => {
            // Filter the restraunt cards and update the UI
            // searchText

            const filteredRestaurant = restaurantData.filter((res) =>
              res.data.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            console.log("filteredRestaurant", filteredRestaurant);

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
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
      {filteredRestaurant.length === 0 ? (
        <Shimmer count={10} type="restaurantCard" />
      ) : (
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      )}
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
