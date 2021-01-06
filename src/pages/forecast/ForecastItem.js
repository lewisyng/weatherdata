import React from 'react';
import './ForecastItem.css';
import PropTypes from 'prop-types';

function ForecastItem(props) {
  const { item, key } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
  
  return (
    // eslint-disable-next-line
    <div
      className='forecast__results__item'
      onClick={() => props.handleClick(item)}
    >
      <img
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
        alt='aa'
      />
      <div className='forecast__results__item__temp'>
        {formatter.format(item.main.temp - 273.15)}
        °
      </div>
      <div className='forecast__results__item__time'>
        {item.dt_txt.slice(11, 16)}
      </div>
    </div>
  );
}

ForecastItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.object).isRequired,
  key: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ForecastItem;
