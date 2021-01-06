import React from 'react';
import './CurrentWeatherHeader.css';

function CurrentWeatherHeader(props) {
  const { generalData } = props;

  const getDayName = (locales) => {
    let date = new Date();
    return date.toLocaleDateString(locales, { weekday: 'short' });
  };

  const getTime = () => {
    let time = new Date();
    return time.toLocaleTimeString().slice(0, 5);
  };

  return (
    <div>
      <div className='currentWeatherData__location'>{generalData.name}</div>
      <div className='currentWeatherData__subHeader'>
        {`${getDayName('de-DE')}, `}
        {`${getTime()}, `}
        {generalData.weather[0].main}
      </div>
    </div>
  );
}

export default CurrentWeatherHeader;
