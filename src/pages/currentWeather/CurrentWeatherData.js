import React from 'react';
import './CurrentWeatherData.css';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';

function CurrentWeatherData(props) {
  const { weatherData } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <>
      {weatherData && (
        <Card
          className='currentWeatherData'
          style={{ backgroundColor: '#F59AB3' }}
        >
          <div className='currentWeatherData__location'>
            <p>
              {weatherData.name}
            </p>
          </div>
          <div className='currentWeatherData__left'>
            <div className='currentWeatherData__degrees'>
              {`${formatter.format(weatherData.main.temp - 273.15)} °C`}
            </div>
            <div className='currentWeatherData__wind'>
              {`${formatter.format(weatherData.wind.speed * 3.6)} km/h`}
            </div>
          </div>
          <div className='currentWeatherData__right'>
            <div className='currentWeatherData__icon'>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=''
              />
            </div>
            <div className='currentWeatherData__weather'>
              {weatherData.weather[0].main}
            </div>
          </div>
        </Card>
      )}
    </>
  );
}

CurrentWeatherData.propTypes = {
  weatherData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CurrentWeatherData;
