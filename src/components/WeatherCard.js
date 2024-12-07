import React from "react";

const WeatherCard = ({ title, weatherData }) => {
  function displayingData(title) {
    let detail;
    switch (title) {
      case "Temperature":
        detail = `${weatherData?.current?.temp_c}°C`;
        break;
      case "Humidity":
        detail = `${weatherData?.current?.humidity}%`;
        break;
      case "Condition":
        detail = `${weatherData?.current?.condition?.text}`;
        break;
      case "Wind Speed":
        detail = `${weatherData?.current?.wind_kph}kph`;
        break;
      default:
        detail = "Invalid Detail!";
    }
    return detail;
  }
  return (
    <div className="weather-card">
      <h3>{title}</h3>
      <p>{displayingData(title)}</p>
    </div>
  );
};
export default WeatherCard;
