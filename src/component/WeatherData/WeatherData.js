import React, { Component } from "react";
import DisplayDaily from '../DisplayDaily/DisplayDaily';
import classes from './weatherData.module.css';

export default class weatherData extends Component {

  // Filters the data by date and returns an Object containing a list of 5-day forecast.
  _groupByDays = data => {
    return (data.reduce((list, item) => {
      const forecastDate = item.dt_txt.substr(0,10);
      list[forecastDate] = list[forecastDate] || [];
      list[forecastDate].push(item);

      return list;
    }, {}));
  };

  _getDayInfo = data => {
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  };

  _getIcon = data => `https://openweathermap.org/img/w/${data[0].weather[0].icon}.png`;

  
  _getInfo = (data, min=[], max=[], humidity=[]) => {
    data.map(item => {
      max.push(item.main.temp_max);
      min.push(item.main.temp_min);
      humidity.push(item.main.humidity);
    });

    const minMax = {
      min: Math.round(Math.min(...min)),
      max: Math.round(Math.max(...max)),
    };

    // Gets the day's average humdity
    const avgHumdity = Math.round(humidity.reduce((curr, next) => curr + next) / humidity.length);

    return (
      <div className="weather-info">
        <div className="min-max">
          <strong>{`${Number.parseInt(minMax.max) -275}°C`}</strong> / {`${Number.parseInt(minMax.min) - 275}°C`}
        </div>
        <div className="more-info">
          {`Avg. Humidity: ${avgHumdity}%`}
        </div>
      </div>
    );
  };


  render() {

    const { forecasts } = this.props;
    const tiles = Object.values(this._groupByDays(forecasts));


    const forecastTiles = tiles.length > 5 ? tiles.slice(0, 5) : tiles;

    return (
      <div className={classes.WeatherCards}>
        {forecastTiles.map((item, i) => (
            console.log(item),
         <DisplayDaily 
         key={i}
          wdats={item}
          mySrc={this._getIcon(item)}
          info={this._getDayInfo(item)}
          day={this._getInfo(item)}
        
          />
        ))}
      </div>
    );
  }
}

