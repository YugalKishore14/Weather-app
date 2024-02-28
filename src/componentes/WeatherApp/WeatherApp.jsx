import React from "react";
import "./WeatherApp.css";
import images_icon from "../Assets/images.png";
import cloudy1_icon from "../Assets/cloudy1.png";
// import cloudy2_icon from "../Assets/cloudy2.png";
import humidity_icon from "../Assets/humidity.png";
// import rainy_icon from "../Assets/rainy.png";
// import sun_icon from "../Assets/sun.png";
import wind_icon from "../Assets/wind.png";
const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div className="search-icon">
          <img src={images_icon} alt="error" />
        </div>
      </div>
      <div className="weather-img">
        <img src={cloudy1_icon} alt="error" />
      </div>

      <div className="weather-temp">24°C</div>
      <div className="weather-location">India</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="error" className="icon" />
          <div className="data">
            <div className="humidity-percent">18 Km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
