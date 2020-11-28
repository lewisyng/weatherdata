import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import CurrentWeather from './pages/currentWeather/CurrentWeather';
import Forecast from './pages/forecast/Forecast';
import { SearchContext } from './context/searchContext';

function App() {
  const [data, setData] = useState();

  return (
    <div className='app'>
      <Router>
        <SearchContext.Provider value={data}>
          <Nav setData={(data) => setData(data)} />
          <Switch>
            <Route exact path='/'>
              <CurrentWeather />
            </Route>
            <Route exact path='/forecast'>
              <Forecast />
            </Route>
          </Switch>
        </SearchContext.Provider>
      </Router>
    </div>
  );
}

export default App;
