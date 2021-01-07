import React from 'react';
import './ForecastItem.css';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@material-ui/core';

function ForecastItem(props) {
  const { item, key } = props;

  return (
    // eslint-disable-next-line
    <Button
      className='forecast__results__item'
      onClick={() => props.handleClick(item.dt_txt)}
    >
      {/* <img
        className='forecast_results__item__icon'
        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
        alt='aa'
      /> */}
      <div className='forecast__results__item__time'>
        {item.dt_txt.slice(11, 16)}
      </div>
    </Button>
  );
}

ForecastItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.object).isRequired,
  key: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ForecastItem;
