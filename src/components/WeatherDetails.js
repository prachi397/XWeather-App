import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherDetails = ({ weatherData, loading }) => {
  const titleArr = ["Temperature", "Humidity", "Condition", "Wind Speed"];
  return (
    <div>
      {loading ? (
        <p>Loading data…</p>
      ) : (
            weatherData && (
                <div className="weather-cards">
                {titleArr.map((ele) => (
                  <WeatherCard key={ele} weatherData={weatherData} title={ele} />
                ))}
              </div>
            )
      )}
    </div>
  );
};
export default WeatherDetails;
