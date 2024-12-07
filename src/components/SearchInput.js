import React from "react";

const SearchInput = ({handleSearchCity,handleCityChange,searchedCity}) => {
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Enter city name"
        value={searchedCity}
        onChange={handleCityChange}
      />
      <button onClick={handleSearchCity}>Search</button>
    </div>
  );
};
export default SearchInput;
