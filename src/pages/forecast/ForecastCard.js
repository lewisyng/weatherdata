import React, { useEffect, useState } from 'react';
import './ForecastCard.css';
import { Card, Tab, Tabs } from '@material-ui/core';
import ForecastItem from './ForecastItem';

function ForecastCard(props) {
  const {weatherData} = props;
  const [tab, setTab] = useState();

  useEffect(() => {
    if (weatherData) {
      console.log('weatherData', weatherData);
      setTab(Object.keys(weatherData)[0]);
    }
  }, [weatherData]);

  return (
    <div className='forecastCard'>
      {tab && (
        <Card
          style={{
            height: '25vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Tabs
            value={tab}
            onChange={(event, newValue) => setTab(newValue)}
          >
            {Object.keys(weatherData).map((item) => (
              <Tab
                value={item.slice(0, 10)}
                key={item.slice(0, 10)}
                label={item.slice(0, 10)}
              />
            ))}
          </Tabs>
          <div className='forecastCard__day'>
            {weatherData[tab].map((item, i) => (
              <ForecastItem
                key={i}
                item={item}
              />
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

export default ForecastCard;
