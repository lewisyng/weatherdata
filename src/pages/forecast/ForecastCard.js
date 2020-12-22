import React, { useEffect, useState } from 'react';
import './ForecastCard.css';
import { Card, Tab, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import ForecastCardData from './ForecastCardData';

function ForecastCard(props) {
  const { weatherData, location } = props;
  const [tab, setTab] = useState();
  const [selectedTime, setSelectedTime] = useState();

  useEffect(() => {
    if (weatherData) {
      setTab(Object.keys(weatherData)[0]);
    }
  }, [weatherData]);

  useEffect(() => {
    if (tab) {
      setSelectedTime(weatherData[tab][0]);
    }
  }, [tab]);

  return (
    <>
      {selectedTime && (
        <Card
          className='forecastCard'
        >
          <Tabs value={tab} onChange={(event, newValue) => setTab(newValue)}>
            {Object.keys(weatherData).map((item) => (
              <Tab value={item} key={item} label={item} />
            ))}
          </Tabs>

          <ForecastCardData data={selectedTime} location={location} />

          <div className='forecastCard__day'>
            {weatherData[tab].map((item, i) => (
              <ForecastItem
                key={i}
                item={item}
                handleClick={(newItem) => setSelectedTime(newItem)}
              />
            ))}
          </div>
        </Card>
      )}
    </>
  );
}

ForecastCard.propTypes = {
  weatherData: PropTypes.objectOf(PropTypes.object).isRequired,
  location: PropTypes.string.isRequired,
};

export default ForecastCard;
