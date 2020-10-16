import React from 'react';
import WeatherForecast from '../WeatherForecast/WeatherForecast';
import {connect} from 'react-redux';
import * as actions from "../../store/actions/index";

 class WeatherApp extends React.Component {
 

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

export default connect(mapStateToProps , mapDispatchToProps) (WeatherApp);

