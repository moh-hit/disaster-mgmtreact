import React, { useState, useEffect } from "react";
import {
  FiCloud,
  FiCloudLightning,
  FiSun,
  FiCloudRain,
  FiCloudDrizzle,
} from "react-icons/fi";
import { IoMdLocate, IoIosSnow } from "react-icons/io";
import { apiKey } from "../components/apiKey";
import axios from "axios";

export default function Weather() {
  const [temp, setTemp] = useState("");
  const [location, setLocation] = useState("");
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [classColor, setClass] = useState("");
  const getData = async () => {
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}`
      )
      .then((res) => {
        console.log(res.data);
        setLocation(res.data.name);
        setTemp(res.data.main.temp);
        switch (res.data.weather[0].main) {
          case "Clouds":
            setWeatherIcon(<FiCloud color="#35d0ba" size={56} />);
            setClass(
              "linear-gradient(90deg, rgba(0,0,0,0) 80%, #35d0ba6a 100%)"
            );
            break;
          case "Clear":
            setWeatherIcon(<FiSun color="#fcbf1e" size={56} />);
            setClass(
              "linear-gradient(90deg, rgba(0,0,0,0) 80%, #fcbf1e6a 100%)"
            );

            break;
          case "Thunderstorm":
            setWeatherIcon(<FiCloudLightning color="#035aa6" size={56} />);
            setClass(
              "linear-gradient(90deg, rgba(0,0,0,0) 80%, #035aa66a 100%)"
            );

            break;
          case "Drizzle":
            setWeatherIcon(<FiCloudDrizzle color="#35d0ba" size={56} />);
            setClass(
              "linear-gradient(90deg, rgba(0,0,0,0) 80%, #35d0ba6a 100%)"
            );

            break;
          case "Rain":
            setWeatherIcon(<FiCloudRain color="#3797a4" size={56} />);
            setClass(
              "linear-gradient(90deg, rgba(0,0,0,0) 80%, #3797a46a 100%)"
            );

            break;
          case "Snow":
            setWeatherIcon(<IoIosSnow color="#e8e4e1" size={56} />);
            setClass(
              "linear-gradient(90deg, rgba(0,0,0,0) 80%, #e8e4e16a 100%)"
            );

            break;
          default:
            setWeatherIcon(<FiSun color="#fcbf1e" size={56} />);
            break;
        }
      });
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }, []);

  return (
    <div className="d-flex justify-content-around p-5">
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div
          className={`shadow-lg card`}
          style={{ backgroundImage: classColor }}
        >
          {console.log(classColor)}
          <div className="card-body d-flex justify-content-around align-items-center">
            <div>
              <h1 className="temp">{Math.floor(temp)}°</h1>
              <p className="card-text">{location}</p>
            </div>

            {weatherIcon}
          </div>
        </div>
      </div>
      <IoMdLocate
        onClick={getData}
        size={36}
        color="#000"
        style={{
          position: "fixed",
          top: 100,
          right: 20,
          cursor: "pointer",
          zIndex: 999,
        }}
      />
    </div>
  );
}
