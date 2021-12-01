import React, { Component, useEffect, useState } from "react";
import Forecast from './Forecast';
import axios from 'axios';

function WeatherForecast() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [forecast, setForecast] = useState([]);

    useEffect(() => { 
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
          axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=a872ab5fd9c7b5bd50632c167416b321`)
          .then(data => {
            console.log(data.data);  
            setForecast(data.data.daily)

          })
        }
        fetchData();
    }, [lat,long])
    return (
    <div>
        <Forecast 
            forecast={forecast}
        />
    </div>
    
    
  );
}



export default WeatherForecast;