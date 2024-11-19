// src/components/CityCard.js
import React from 'react';

const CityCard = ({ city, removeCity, weatherData }) => {
  const { current, forecast } = weatherData;
  
  return (
    <div className="city-card">
      <h3>{city}</h3>
      <button onClick={() => removeCity(city)}>Remove</button>
      
      <div className="current-weather">
        <p>Temperature: {current.main.temp}°C</p>
        <p>Condition: {current.weather[0].description}</p>
        <p>High: {current.main.temp_max}°C | Low: {current.main.temp_min}°C</p>
      </div>

      <div className="forecast">
        <h4>3-Day Forecast:</h4>
        {forecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>High: {day.main.temp_max}°C | Low: {day.main.temp_min}°C</p>
            <p>Condition: {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityCard;
