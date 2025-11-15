import React from "react";
import WeatherSearch from './weathersearch'
import './styles.css';

export default function App() {
  return (
      <div className="App">
      <div className="container">
        <WeatherSearch />
    
      <h1>Weather App</h1>
      <footer>
        This Project was Coded by{" "} Emma Yee-Joy and is open-sourced on 
        <a href="https://github.com/eyeej">Github</a>{" "} and is{" "} hosted on 
        <a href="https://shecodes-react-weather-hw.netlify.app/">Netlify</a>
      </footer>
    </div>
  </div>
  );
}


