import React, { useState } from "react";
import SearchInput from "./SearchInput";
import WeatherDetails from "./WeatherDetails";

const MainComp = () => {
  const [searchedCity, setSearchedCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearchedClicked, setIsSearchedClicked] = useState(false);

  //function to enter city name
  function handleCityChange(e) {
    setSearchedCity(e.target.value);
  }

  //function to fetch data when click on search button
  async function handleSearchCity(searchedCity) {
    try {
    if(searchedCity){
      setLoading(true);
      setIsSearchedClicked(true);
      let url = `https://api.weatherapi.com/v1/current.json?key=5f1401b913aa40e18c764432240712&q=${searchedCity}`;
      let resp = await fetch(url);
      if (resp.ok) {
        let result = await resp.json();
        setWeatherData(result);
      } else {
        alert("Failed to fetch weather data");
        setWeatherData([]);
        setIsSearchedClicked(false);
      }
    }
    } catch (err) {
      console.error("Failed to fetch weather data:", err);
    } finally {
      setLoading(false); 
    }
  }
  
  return (
    <div>
      <SearchInput
        handleSearchCity={() => handleSearchCity(searchedCity)}
        handleCityChange={handleCityChange}
        searchedCity={searchedCity}
      />
      {isSearchedClicked && <WeatherDetails weatherData={weatherData} searchedCity={searchedCity} loading={loading}/>}
    </div>
  );
};
export default MainComp;
