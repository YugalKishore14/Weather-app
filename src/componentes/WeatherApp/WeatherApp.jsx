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
  let api_key = "ac7850811a1c52b23b7d28789a892f60";
  const search = () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
 
  

  const humidity = document.getElementsByClassName("humidity-percent");
  const wind = document.getElementsByClassName("wind-rate");
  const temprature = document.getElementsByClassName("weather-temp");
  const location = document.getElementsByClassName("weather-location");
  humidity[0].innerHTML = data.main.humidity;
  wind[0].innerHTML = data.wind.speed;
  temprature[0].innerHTML = data.main.temp;
  location[0].innerHTML = data.name;
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <img src={images_icon} alt="error" />
        </div>
      </div>
      <div className="weather-img">
        <img src={cloudy1_icon} alt="error" />
      </div>

      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
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
            <div className="wind-rate">18 Km/h</div>
            <div className="text">Wind speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
