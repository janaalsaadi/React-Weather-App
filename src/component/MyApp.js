import React from 'react';
import axios from 'axios';
import WeatherForecast from './WeatherForecast';
import {connect} from 'react-redux';
import * as actions from "../store/actions/index";

 class MyApp extends React.Component {
 

  state={
    data:[],
    city:[],
    list:[]
  }

  componentDidMount(){
    this.props.onFetchWeather();
  }
  


  render () {
    return (
      <div>
      
      <WeatherForecast    list={this.props.list}  city={this.props.city.name} />
     


      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    forcastData: state.forcastData,
    list:state.list,
    city:state.city
   
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchWeather: () => dispatch(actions.fetchWeatherData())
  };
};

export default connect(mapStateToProps , mapDispatchToProps) (MyApp);

