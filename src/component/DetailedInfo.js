
import React from "react";
import {Line} from 'react-chartjs-2';
class DetailedInfo extends React.Component{


    state ={
         hourlyDataWeather:[],
        temp:[],
        hours:[]

    }

   hourlyWeather = (temp , dt_txt) => {
        
          let myObj={
            
              x:dt_txt > 12 ? Number.parseInt(dt_txt)-12 : Number.parseInt(dt_txt),
              y:temp
          }
          this.state.hourlyDataWeather.push(myObj);
   }

   setHours = (hour) => {
         this.state.hours.push(hour)
   } 

   setTemp = (temp) => {
          this.state.temp.push(temp)
   }

render(){
  const info = {
    labels: this.state.hours,
    datasets: [
      {
        label: 'Hourly forcast',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: this.state.temp
      }
    ]
  }
  return (
    <div className="hourly">
      {this.props.data.map((item, i) => (
          
          this.hourlyWeather(Number.parseInt(item.main.temp)-275 , item.dt_txt.substring(11,13)),
          this.setHours(item.dt_txt.substring(11,13)),
          this.setTemp(Number.parseInt(item.main.temp)-275)
          
      ))}
      
      <div>
      <Line
      
          data={info}
          options={{
            title:{
              display:true,
            //  text:'Hourly forcast',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
    
      </div>
    </div>
  );
};
}

export default DetailedInfo;
