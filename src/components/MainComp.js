import React, { useState } from "react";
import SearchInput from "./SearchInput";

const MainComp = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);

  //function to enter city name
  function handleCityChange(e) {
    setSearchedCity(e.target.value);
  }

  //function to fetch data when click on search button
  async function handleSearchCity(searchedCity) {
    try {
      setLoading(true);
      let url = `https://api.weatherapi.com/v1/current.json?key=5f1401b913aa40e18c764432240712&q=${searchedCity}`;
      let resp = await fetch(url);
      let result = await resp.json();
      if (result.ok) {
        setLoading(false);
        setWeatherData(result);
      } else {
        setLoading(false);
        alert("Failed to fetch weather data");
      }
    } catch (err) {
      setLoading(false);
      console.log("Failed to fetch weather data");
    }
  }
  return (
    <div>
      <SearchInput
        handleSearchCity={() => handleSearchCity(searchedCity)}
        handleCityChange={handleCityChange}
        searchedCity={searchedCity}
      />
    </div>
  );
};
export default MainComp;
