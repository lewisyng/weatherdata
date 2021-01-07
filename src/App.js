import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './assets/Header';
import Footer from './Footer'
import CurrentWeather from './pages/currentWeather/CurrentWeather';
import Forecast from './pages/forecast/Forecast';
import { SearchContext } from './context/searchContext';
import SearchForm from './SearchForm';

function App() {
  const [data, setData] = useState();

  return (
    <div className='app'>
      <Router>
        <SearchContext.Provider value={data}>
          <Header />
          <SearchForm setData={(value) => setData(value)} />
          <Switch>
            <Route exact path='/' component={CurrentWeather} />
            <Route exact path='/forecast' component={Forecast} />
          </Switch>
          <Footer />
        </SearchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
