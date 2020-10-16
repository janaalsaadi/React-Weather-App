import React, { Component } from "react";
import ForecastTiles from "./ForecastTiles";
import Dashboard from "./Dashboard";

class WeatherForecast extends Component{
    render(){
      
      
    return (
      <div>
        <Dashboard city={this.props.city} />
        <ForecastTiles forecasts={this.props.list} />
      </div>
    );
};
}
export default WeatherForecast;