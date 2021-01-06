import React, { useEffect, useState } from 'react';
import { Slider } from '@material-ui/core';

function WeatherSlider(props) {
  const { sliderMark, specificData } = props;
  const [marks, setMarks] = useState([]);

  const turnToTime = (unixTime) => {
    let dataObj = new Date(unixTime * 1000);
    return dataObj.toLocaleString('en-US', { hour: 'numeric' });
  };

  useEffect(() => {
    specificData.hourly.forEach((item, i) => {
      while (i < 24) {
        if (i % 4 === 0) {
          setMarks(
            ...marks, {
              value: i * 12.5,
              label: turnToTime(item.dt),
            },
          );
        }
      }
    });
  }, []);

  // const marks = [
  //   {
  //     value: 0,
  //     label: '',
  //   },
  //   {
  //     value: 12.5,
  //     label: '03:00',
  //   },
  //   {
  //     value: 25,
  //     label: '06:00',
  //   },
  //   {
  //     value: 37.5,
  //     label: '09:00',
  //   },
  //   {
  //     value: 50,
  //     label: '12:00',
  //   },
  //   {
  //     value: 62.5,
  //     label: '15:00',
  //   },
  //   {
  //     value: 75,
  //     label: '18:00',
  //   },
  //   {
  //     value: 87.5,
  //     label: '21:00',
  //   },
  //   {
  //     value: 100,
  //     label: '',
  //   },
  // ];

  return (
    <>
      <Slider
        style={{ width: '90%', alignSelf: 'center' }}
        defaultValue={sliderMark * 12.5}
        step={12.5}
        marks={marks}
        onChange={(e, value) => props.handleSliderChange(e, value)}
      />
    </>
  );
}

export default WeatherSlider;
