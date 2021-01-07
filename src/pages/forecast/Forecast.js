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

  const createObjectFromResults = () => {
    console.log('results', results);
    const dataObj = { results: {}, place: results.city.name };

    let counter = 0;

    for (let item of results.list) {
      const day = item.dt_txt.slice(0, 10);
      if (!(day in dataObj['results'])) {
        counter++;
        if (counter > 4) {
          break;
        }
        dataObj['results'][day] = [];
      }
      dataObj['results'][day].push(item);
    }
    setWeatherData(dataObj);
  };

  useEffect(() => {
    if (results) {
      createObjectFromResults();
    }
  }, [results]);

  return (
    <div className='forecast'>
      <ForecastCard weatherData={weatherData} />
    </div>
  );
}

export default Forecast;
