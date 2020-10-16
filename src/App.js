import React from 'react';
import WeatherApp from './component/WeatherApp/WeatherApp';
import classes from './App.module.css';
 class App extends React.Component {
 

  render () {

    return (
      <div className={classes.main}>
      <WeatherApp/>
      </div>
    )
  }
}

export default App;

