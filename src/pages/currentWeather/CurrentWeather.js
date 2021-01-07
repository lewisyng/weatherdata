import React, { useContext, useEffect, useState } from 'react';
import './CurrentWeather.css';
import apiKey from '../../api';
import { SearchContext } from '../../context/searchContext';
import CurrentWeatherData from './CurrentWeatherData';
import GeoMap from './GeoMap';

function CurrentWeather() {
  const userInput = useContext(SearchContext);
  const [generalData, setGeneralData] = useState();
  const [lon, setLon] = useState();
  const [lat, setLat] = useState();
  const [dailyWeatherData, setDailyWeatherData] = useState();

  useEffect(() => {
    if (userInput) {
      fetch(
        `https://cors-everywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`,
      )
        .then((response) => response.json())
        .then((data) => setGeneralData(data));
    }
  }, [userInput]);

  useEffect(() => {
    if (generalData) {
      setLon(generalData.coord.lon);
      setLat(generalData.coord.lat);
    }
  }, [generalData]);

  useEffect(() => {
    if (lat && lon) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}`,
      )
        .then((response) => response.json())
        .then((data) => setDailyWeatherData(data));
    }
  }, [lat, lon]);

  return (
    <div className='currentWeather'>
      {dailyWeatherData && <CurrentWeatherData generalData={generalData} specificData={dailyWeatherData} />}

      {(lon, lat) && <GeoMap lon={lon} lat={lat} />}
    </div>
  );
}

export default CurrentWeather;
