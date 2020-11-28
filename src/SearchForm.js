import React, { useState } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

import { InputBase } from '@material-ui/core';

function SearchForm(props) {
  const [userIn, setUserIn] = useState();

  const fetchWeatherData = (e) => {
    e.preventDefault();

    if (userIn) {
      props.setData(userIn);
    }
  };

  return (
    <div className='searchForm'>
      <form onSubmit={(e) => fetchWeatherData(e)}>
        <InputBase
          onChange={(event) => setUserIn(event.target.value)}
          value={userIn}
          placeholder='Suchen'
          required
        />
      </form>
    </div>
  );
}

SearchForm.propTypes = {
  setData: PropTypes.func.isRequired,
};

export default SearchForm;
