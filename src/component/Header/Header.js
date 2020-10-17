import React, { Component } from "react";
import { connect } from "react-redux";
import classes from './Header.module.css';
import * as actions from '../../store/actions/index';


 class Header extends Component {
  componentDidMount(){
    this.props.onFetchWeather()
  }
  render() {
    return (
      <div className={classes.myHeader}>
        
        <header className={classes.main}>
        <div>
          <img src={require('../../images/rain.png')} />
          </div>


          <div>
          <img src={require('../../images/cloudy.png')} />
          </div>

          <div>
          <img src={require('../../images/stars.png')} />
          </div>

          <div>
          <img src={require('../../images/rainbow.png')} />
          </div>

          <div>
          <img src={require('../../images/cloud.png')} />
          </div>

          <div className={classes.Title}>
          5-Day Weather Forecast
          </div>

          <div>
          <img src={require('../../images/storm.png')} />
          </div>

          <div>
          <img src={require('../../images/climate-change.png')} />
          </div>

          <div>
          <img src={require('../../images/sunset.png')} />
          </div>

          <div>
          <img src={require('../../images/clouds-and-sun.png')} />
          </div>

          <div>
          <img src={require('../../images/windy.png')} />
          </div>

        </header>
    <span> {this.props.city.name}</span>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    city:state.city
   
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onFetchWeather: () => dispatch(actions.fetchWeatherData())
  };
};

export default connect(mapStateToProps , mapDispatchToProps) (Header);

