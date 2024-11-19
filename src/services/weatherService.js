// src/services/weatherService.js

export const fetchWeatherData = async (city) => {
    const mockData = {
      "New York": {
        current: { temp: 15, weather: [{ description: "Sunny" }], main: { temp_max: 18, temp_min: 12 } },
        forecast: [
          { dt_txt: "2024-11-18 12:00:00", main: { temp_max: 18, temp_min: 12 }, weather: [{ description: "Sunny" }] },
          { dt_txt: "2024-11-19 12:00:00", main: { temp_max: 20, temp_min: 14 }, weather: [{ description: "Partly Cloudy" }] },
          { dt_txt: "2024-11-20 12:00:00", main: { temp_max: 22, temp_min: 16 }, weather: [{ description: "Cloudy" }] },
        ],
      },
      "London": {
        current: { temp: 10, weather: [{ description: "Rainy" }], main: { temp_max: 12, temp_min: 8 } },
        forecast: [
          { dt_txt: "2024-11-18 12:00:00", main: { temp_max: 12, temp_min: 8 }, weather: [{ description: "Rainy" }] },
          { dt_txt: "2024-11-19 12:00:00", main: { temp_max: 13, temp_min: 9 }, weather: [{ description: "Showers" }] },
          { dt_txt: "2024-11-20 12:00:00", main: { temp_max: 14, temp_min: 10 }, weather: [{ description: "Partly Cloudy" }] },
        ],
      },
      "Paris": {
        current: { temp: 17, weather: [{ description: "Cloudy" }], main: { temp_max: 20, temp_min: 15 } },
        forecast: [
          { dt_txt: "2024-11-18 12:00:00", main: { temp_max: 20, temp_min: 15 }, weather: [{ description: "Cloudy" }] },
          { dt_txt: "2024-11-19 12:00:00", main: { temp_max: 21, temp_min: 16 }, weather: [{ description: "Sunny" }] },
          { dt_txt: "2024-11-20 12:00:00", main: { temp_max: 22, temp_min: 17 }, weather: [{ description: "Partly Cloudy" }] },
        ],
      },
      "Tokyo": {
        current: { temp: 18, weather: [{ description: "Clear" }], main: { temp_max: 23, temp_min: 14 } },
        forecast: [
          { dt_txt: "2024-11-18 12:00:00", main: { temp_max: 23, temp_min: 14 }, weather: [{ description: "Clear" }] },
          { dt_txt: "2024-11-19 12:00:00", main: { temp_max: 25, temp_min: 18 }, weather: [{ description: "Sunny" }] },
          { dt_txt: "2024-11-20 12:00:00", main: { temp_max: 26, temp_min: 19 }, weather: [{ description: "Partly Cloudy" }] },
        ],
      },
      "Sydney": {
        current: { temp: 22, weather: [{ description: "Partly Cloudy" }], main: { temp_max: 26, temp_min: 19 } },
        forecast: [
          { dt_txt: "2024-11-18 12:00:00", main: { temp_max: 26, temp_min: 19 }, weather: [{ description: "Partly Cloudy" }] },
          { dt_txt: "2024-11-19 12:00:00", main: { temp_max: 28, temp_min: 22 }, weather: [{ description: "Sunny" }] },
          { dt_txt: "2024-11-20 12:00:00", main: { temp_max: 30, temp_min: 24 }, weather: [{ description: "Clear" }] },
        ],
      },
    };
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mockData[city]) {
          resolve(mockData[city]);
        } else {
          reject(`City ${city} not found`);
        }
      }, 1000); // Simulate network delay
    });
  };
  