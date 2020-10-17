import React from 'react';
import WeatherData from "../WeatherData/WeatherData";
import Header from "../Header/Header";

 class WeatherApp extends React.Component {



  render () {
    return (
      <div>
      
        <Header/>
        <WeatherData  />



      </div>
    )
  }
}


export default WeatherApp;

