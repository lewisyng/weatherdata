import React, { useContext, useEffect, useState } from 'react';
import './CurrentWeather.css';
import apiKey from '../../api';
import { SearchContext } from '../../context/searchContext';

function CurrentWeather() {
  const userInput = useContext(SearchContext);
  const [weatherData, setWeatherData] = useState();

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  useEffect(() => {
    if (userInput) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`,
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    }
  }, [userInput]);

  let weather;

  if (weatherData) {
    weather = (
      <>
        <div className='currentWeather__data__description font-medium'>
          {weatherData.weather[0].main}
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt=''
          />
        </div>
        <div className='currentWeather__data__location font-large'>
          {weatherData.name}
        </div>
        <div className='currentWeather__data__degrees font-medium'>
          {`${formatter.format(weatherData.main.temp - 273.15)} °C`}
        </div>
        <div className='currentWeather__data__wind font-medium'>
          {`${formatter.format(weatherData.wind.speed * 3.6)} km/h`}
        </div>
      </>
    );
  }

  return (
    <div className='currentWeather'>
      <div className='currentWeather__data'>{weatherData && weather}</div>
    </div>
  );
}

export default CurrentWeather;
