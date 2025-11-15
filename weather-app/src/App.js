import React from "react";
import WeatherSearch from './weathersearch'
import WeatherForecast from './WeatherForecast';
import './App.css';
import './weathersearch.css';
import './FormattedDate';

export default function App() {
  return (
      <div className="App">
      <div className="container">
        <WeatherSearch />
      <footer>
        This Project was Coded by{" "} <a href="https://github.com/eyeej">Emma Yee-Joy</a> and is open-sourced on{" "}  
        <a href="https://github.com/eyeej/Weather-React">Github</a>{" "} and is{" "} hosted on <a href="https://shecodes-react-weather-hw.netlify.app/">Netlify</a>
      </footer>
    </div>
  </div>
  );
}


