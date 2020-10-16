import React, { Component } from "react";
import ForecastTiles from "./ForecastTiles";
import Dashboard from "./Dashboard";

class WeatherForecast extends Component{
    render(){
      
      
    return (
      <div className="weather-forecast-wrapper">
        <Dashboard city="jenin" />
        <ForecastTiles forecasts={this.props.list} />
      </div>
    );
};
}
export default WeatherForecast;