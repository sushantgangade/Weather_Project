// src/App.js
import React, { useState } from 'react';
import { fetchWeatherData } from './services/weatherService';
import SearchBar from './components/SearchBar';
import CityCard from './components/CityCard';
import WeatherGraph from './components/WeatherGraph';
import './App.css';

const App = () => {
  const [cities, setCities] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [selectedCity, setSelectedCity] = useState(null);

  const predefinedCities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeatherData(city);
      setWeatherData((prevData) => ({ ...prevData, [city]: data }));
      setCities((prevCities) => [...prevCities, city]);
    } catch (error) {
      alert('Could not fetch weather data. Please try again.');
    }
  };

  const handleRemoveCity = (city) => {
    setCities(cities.filter((item) => item !== city));
    const newWeatherData = { ...weatherData };
    delete newWeatherData[city];
    setWeatherData(newWeatherData);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />

      <div className="predefined-cities">
        <h3>Select a City:</h3>
        {predefinedCities.map((city) => (
          <button key={city} onClick={() => handleSearch(city)}>
            {city}
          </button>
        ))}
      </div>

      <div className="city-cards">
        {cities.map((city) => (
          <div key={city} onClick={() => handleSelectCity(city)}>
            <CityCard city={city} weatherData={weatherData[city]} removeCity={handleRemoveCity} />
          </div>
        ))}
      </div>

      {selectedCity && weatherData[selectedCity] && (
        <div className="weather-graph">
          <WeatherGraph data={weatherData[selectedCity].forecast} />
        </div>
      )}
    </div>
  );
};

export default App;
