import React, { Component } from "react";
import WeatherData from "../WeatherData/WeatherData";
import Header from "../Header/Header";

class WeatherForecast extends Component{
    render(){
      
      
    return (
      <div>
        <Header city={this.props.city} />
        <WeatherData forecasts={this.props.list} />
      </div>
    );
};
}
export default WeatherForecast;