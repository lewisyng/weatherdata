import React, { useContext, useEffect, useState } from 'react';
import './CurrentWeather.css';
import apiKey from '../../api';
import { SearchContext } from '../../context/searchContext';
import CurrentWeatherData from './CurrentWeatherData';
import Map from './Map';

function CurrentWeather() {
  const userInput = useContext(SearchContext);
  const [weatherData, setWeatherData] = useState();
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();

  useEffect(() => {
    if (userInput) {
      fetch(
        `https://cors-everywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`,
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    }
  }, [userInput]);

  useEffect(() => {
    if (weatherData) {
      setLon(weatherData.coord.lon);
      setLat(weatherData.coord.lat);
    }
  }, [weatherData]);

  return (
    <div className='currentWeather'>
      {weatherData && <CurrentWeatherData weatherData={weatherData} />}

      {(lon, lat) && <Map lon={lon} lat={lat} />}
    </div>
  );
}

export default CurrentWeather;
