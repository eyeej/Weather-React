import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import WeatherSearch from "./app";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
  </StrictMode>
);