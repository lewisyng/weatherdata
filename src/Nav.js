import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';
import Logo from './Logo';

function Nav(props) {
  const [data, setData] = useState();

  useEffect(() => {
    if (data) {
      props.setData(data);
    }
  }, [data]);

  return (
    <div className='nav'>
      <Logo />
      <SearchForm setData={(value) => setData(value)} />
      <div className='nav__links'>
        <Link to='/'>Current Weather</Link>
        <Link to='/forecast'>Weather Forecast</Link>
      </div>
    </div>
  );
}

export default Nav;
