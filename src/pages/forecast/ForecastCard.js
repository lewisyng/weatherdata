import React, { useEffect, useState } from 'react';
import './ForecastCard.css';
import { Card, Tab, Tabs } from '@material-ui/core';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import ForecastCardData from './ForecastCardData';

function ForecastCard(props) {
  const { weatherData } = props;
  const [selectedTab, setSelectedTab] = useState();

  const [dataOfSelectedTime, setDataOfSelectedTime] = useState();

  useEffect(() => {
    console.log('data', weatherData);
    if (weatherData) {
      let initiateTab = Object.keys(weatherData['results'])[0];
      setSelectedTab(initiateTab);
      setDataOfSelectedTime(weatherData['results'][initiateTab][0]);
    }
  }, [weatherData]);

  const changeSelectedTime = (data) => {
    setDataOfSelectedTime(
      weatherData['results'][selectedTab].filter((obj) => {
        return obj.dt_txt === data;
      })[0],
    );
  };

  useEffect(() => {
    if (selectedTab) {
      setDataOfSelectedTime(weatherData['results'][selectedTab][0]);
    }
  }, [selectedTab]);

  return (
    <>
      {dataOfSelectedTime && (
        <Card elevation={2} className='forecastCard'>
          <Tabs
            variant='fullWidth'
            value={selectedTab}
            onChange={(event, newValue) => {
              setSelectedTab(newValue);
            }}
          >
            {Object.keys(weatherData['results']).map((item) => (
              <Tab value={item} key={item} label={item} />
            ))}
          </Tabs>

          <ForecastCardData
            dataOfSelectedTime={dataOfSelectedTime}
            weatherData={weatherData}
          />

          <div className='forecastCard__day'>
            {weatherData['results'][selectedTab].map((item, i) => (
              <ForecastItem
                key={i}
                item={item}
                handleClick={changeSelectedTime}
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
