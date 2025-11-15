
import React from "react";

export default function WeatherIcon(props) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${props.code}@4x.png`}
      alt="weather icon"
      style={{
        width: `${props.size}px`,
        height: `${props.size}px`,
      }}
    />
  );
}