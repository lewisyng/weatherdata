import React from 'react';
import './ForecastCardData.css';
import PropTypes from 'prop-types';

function ForecastCardData(props) {
  const { data, location } = props;

  return (
    <div className='forecastCardData'>
      <div className='forcastCardData__location'>
        <h2>
          {location[0].toUpperCase() + location.slice(1)}
        </h2>
      </div>
      <div className='forcastCardData__time'>
        Time:
        {
            data.dt_txt.slice(11, 16)
        }
      </div>
      <div className='forcastCardData__humidity'>
        Humidity:
        {
            data.main.humidity
        }
      </div>
    </div>
  );
}

ForecastCardData.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.string.isRequired,
};

export default ForecastCardData;
