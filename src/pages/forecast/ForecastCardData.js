import React from 'react';
import './ForecastCardData.css';
import PropTypes from 'prop-types';

function ForecastCardData(props) {
  const { dataOfSelectedTime, weatherData } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div className='forecastCardData'>
      <div className='forecastCardData__general'>
        <div className="forecastCardData__general__left">
          <div className='forecastCardData__location'>{weatherData.place}</div>
          <div className='forecastCardData__time'>
            {`${dataOfSelectedTime.dt_txt.slice(11, 16)} Uhr`}
          </div>
          <div className='forecastCardData__temp'>
            {`${formatter.format(dataOfSelectedTime.main.temp - 273.15)}°C`}
          </div>
        </div>
        <div className="forecastCardData__general__right">
          <div className='forecastCardData__icon'>
            <img
              src={`http://openweathermap.org/img/wn/${dataOfSelectedTime.weather[0].icon}.png`}
              alt='weatherIcon'
            />
          </div>
        </div>
      </div>
      <div className='forecastCardData__specific'>
        <div className='forecastCardData__humidity'>
          {`Feuchtigkeit: ${dataOfSelectedTime.main.humidity}`}
        </div>
        <div className='forecastCardData__wind'>
          {`Wind: ${formatter.format(dataOfSelectedTime.wind.speed * 3.6)}km/h`}
        </div>
      </div>
    </div>
  );
}

ForecastCardData.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.string.isRequired,
};

export default ForecastCardData;
