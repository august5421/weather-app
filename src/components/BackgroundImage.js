import React, { Component } from 'react';
import winterBackground from 'C:/Users/Krispy Lad/Stuff/Programming/Courses/React/weather-app/src/containers/images/winter.jpg';
import springBackground from 'C:/Users/Krispy Lad/Stuff/Programming/Courses/React/weather-app/src/containers/images/spring.jpg';
import summerBackground from 'C:/Users/Krispy Lad/Stuff/Programming/Courses/React/weather-app/src/containers/images/summer.jpg';
import fallBackground from 'C:/Users/Krispy Lad/Stuff/Programming/Courses/React/weather-app/src/containers/images/fall.jpg';
import WeatherContainer from './WeatherContainer';
import WeatherForecast from './WeatherForecast';
const date = new Date();
const month = date.getMonth();
  
const backgroundImages = [
  winterBackground,
  winterBackground,
  springBackground,
  springBackground,
  springBackground,
  summerBackground,
  summerBackground,
  summerBackground,
  fallBackground,
  fallBackground,
  fallBackground ,
  winterBackground,
]

class BackgroundImage extends Component {
  constructor(props){
    super(props);
    this.state = {
      image_src: ''
    }
  }
  componentWillMount() {
    this.setState({image_src:backgroundImages[month] })
  }
  render() {
    return (
       <div className="theBackgroundImage" style={{height: `100vh`, backgroundImage: `url(${this.state.image_src})` }}>
           <div className="wrapper">
               <div className="h-100 d-flex">
                   <div className="centerSixty my-auto">
                        <WeatherContainer></WeatherContainer>
                        <WeatherForecast></WeatherForecast>
                   </div>
                </div>
           </div>     
       </div>  
    );
  }
}

export default BackgroundImage;