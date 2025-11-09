import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!city) {
      alert("Please enter a city name.");
      return;
    }

    const apiKey = "311f1f45fee82242ab4086372ab360f5";
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=metric`;

    axios
      .get(apiURL)
      .then(displayWeather)
      .catch((error) => {
        console.error(error);
        alert("Sorry, we couldn’t find that city. Please try again.");
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  const form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter City..." onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
