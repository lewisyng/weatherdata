import React, { useState, useEffect } from 'react';
import './CurrentWeatherData.css';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import WeatherSlider from './WeatherSlider';
import CurrentWeatherHeader from './CurrentWeatherHeader';

function CurrentWeatherData(props) {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const { generalData, specificData } = props;
  const [sliderMark, setSliderMark] = useState(0);
  const [temp, setTemp] = useState();
  const [sliderTime, setSliderTime] = useState(0);
  const [windSpeed, setWindSpeed] = useState(
    formatter.format(generalData.wind.speed * 3.6),
  );
  const [humidity, setHumidity] = useState(specificData.current.humidity);

  useEffect(() => {
    setTemp(specificData.hourly[sliderMark * 3].temp - 273.15);
  }, [sliderMark]);

  const handleSliderChange = (e, newValue) => {
    setSliderMark(newValue / 12.5);
  };

  return (
    <Card
      elevation={2}
      className='currentWeatherData'
      style={{ color: '#F9F9F9' }}
    >
      <CurrentWeatherHeader generalData={generalData} sliderTime={sliderTime} />
      <div className='currentWeatherData__temp__icon'>
        {formatter.format(temp)}
        <span className='super'>°C</span>
        <img
          src={`http://openweathermap.org/img/wn/${generalData.weather[0].icon}@2x.png`}
          alt=''
        />
      </div>
      <div className='currentWeatherData__wind cwd__data'>
        {`Wind: ${windSpeed} km/h`}
      </div>
      <div className='currentWeatherData__humidity cwd__data'>
        {`Humidity: ${humidity} %`}
      </div>
      <WeatherSlider
        handleSliderChange={handleSliderChange}
        sliderMark={sliderMark}
        specificData={specificData}
      />
    </Card>
  );
}

CurrentWeatherData.propTypes = {
  specificData: PropTypes.objectOf(PropTypes.object).isRequired,
  generalData: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default CurrentWeatherData;
