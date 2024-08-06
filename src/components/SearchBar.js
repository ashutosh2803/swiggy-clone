import { useState } from "react";

const SearchBar = ({ handleSetFilteredRestaurant, filteredRestaurantData }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="searchInputWrapper">
      <input
        className="searchInput"
        type="text"
        value={searchQuery}
        placeholder="focus here to search"
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <button
        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
        onClick={() => {
          // Filter the restraunt cards and update the UI
          // searchText

          const filteredRestaurant = filteredRestaurantData.filter((res) =>
            res.data.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          handleSetFilteredRestaurant(filteredRestaurant);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
