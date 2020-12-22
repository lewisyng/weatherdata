import React, { useContext, useEffect, useState } from 'react';
import './Forecast.css';
import ForecastCard from './ForecastCard';
import apiKey from '../../api';
import { SearchContext } from '../../context/searchContext';

function Forecast() {
  const userInput = useContext(SearchContext);
  const [results, setResults] = useState();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    if (userInput) {
      fetch(
        `https://cors-everywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${userInput}&appid=${apiKey}`,
      )
        .then((response) => response.json())
        .then((res) => {
          setResults(res);
        });
    }
  }, [userInput]);

  useEffect(() => {
    if (results) {
      const dataObj = {};
      let counter = 0;
      for (let item of results.list) {
        const day = item.dt_txt.slice(0, 10);
        if (!(day in dataObj)) {
          counter += 1;
          if (counter > 4) {
            break;
          }
          dataObj[day] = [];
        }
        if (counter <= 4) {
          dataObj[day].push(item);
        }
      }
      setWeatherData(dataObj);
    }
  }, [results]);

  return (
    <div className='forecast'>
      <ForecastCard weatherData={weatherData} location={userInput} />
    </div>
  );
}

export default Forecast;
