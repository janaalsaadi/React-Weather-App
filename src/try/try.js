import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    data: [],
    clouds:[],
    coord:[],
    main:[],
    sys:[],
    weather:[],
    wind:[]

  };
  
  componentDidMount  (){

    let currentComponent = this;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var myLatitude = parseFloat(position.coords.latitude);
        var myLongitude = parseFloat(position.coords.longitude);
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${myLatitude}&lon=${myLongitude}&appid=7fcada73c4286410650cc2658ab8e327`;
  //  console.log(url);
    // in axios access data with .data
    axios.get(url)
      .then(response => {
        currentComponent.setState({
          data: response.data,
          clouds:response.data,
          coord:response.data.coord,
          main:response.data.main,
          sys:response.data.sys,
          weather:response.data.weather,
          wind:response.data.wind

        });
      })
     
      .catch(error => {
      //  console.log(error);
      });
    })
  }
}


  
  render () {
    console.log(this.state.data);
    
    return (
      <div>
      
      
            {/*Number.parseInt(this.state.main.temp_min)-275}°C - {Number.parseInt(this.state.main.temp_max)-275*/}
       
      </div>
    )
  }
}

