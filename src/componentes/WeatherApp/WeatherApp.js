import React, { useState } from "react";
import "./WeatherApp.css";
import images_icon from "../Assets/images.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import clear_icon from "../Assets/clear.png";
import wind_icon from "../Assets/wind.png";
import snow_icon from "../Assets/snow.png";


const WeatherApp = () => {
  const apiKey = process.env.REACT_APP_WEATHER_API;
  const [wicon, setWicon] = useState(cloud_icon);
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " Km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };
  return (
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "top-bar" },
        React.createElement("input", { type: "text", className: "cityInput", placeholder: "search" }),
        React.createElement(
          "div",
          {
            className: "search-icon",
            onClick: () => {
              search();
            }
          },
          React.createElement("img", { src: images_icon, alt: "error" })
        )
      ),
      React.createElement("div", { className: "weather-img" }, React.createElement("img", { src: wicon, alt: "error" })),
      React.createElement("div", { className: "weather-temp" }, "24°C"),
      React.createElement("div", { className: "weather-location" }, "London"),
      React.createElement(
        "div",
        { className: "data-container" },
        React.createElement(
          "div",
          { className: "element" },
          React.createElement("img", { src: humidity_icon, alt: "", className: "icon" }),
          React.createElement(
            "div",
            { className: "data" },
            React.createElement("div", { className: "humidity-percent" }, "64%"),
            React.createElement("div", { className: "text" }, "Humidity")
          )
        ),
        React.createElement(
          "div",
          { className: "element" },
          React.createElement("img", { src: wind_icon, alt: "error", className: "icon" }),
          React.createElement(
            "div",
            { className: "data" },
            React.createElement("div", { className: "wind-rate" }, "18 Km/h"),
            React.createElement("div", { className: "text" }, "Wind speed")
          )
        )
      )
    )
  )
};

export default WeatherApp;




