import React, { Component, useEffect, useState } from "react";
import Weather from './Weather';
import axios from 'axios';

function WeatherContainer() {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const [temprature, setTemprature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [precip, setPrecip] = useState(null);
    const [windSpeed, setWindSpeed] = useState(null);
    const [city, setCity] = useState(null);
    const [condition, setCondition] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => { 
        const fetchData = async () => {
          navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          });
          axios.get(`https://api.weatherapi.com/v1/current.json?key=234235b845d047f0b96212620211811&q=${lat},${long}`)
          .then(data => {
            console.log(data.data);
            setTemprature(data.data.current.temp_f);
            setHumidity(data.data.current.humidity);
            setPrecip(data.data.current.precip_in);
            setWindSpeed(data.data.current.wind_mph);
            setCity(data.data.location.name);
            setCondition(data.data.current.condition.text);
            setIcon(data.data.current.condition.icon);
          })
        }
        fetchData();
    }, [lat,long])
    return (
    <div>
        <Weather 
            temprature={temprature}
            humidity={humidity}
            precip={precip}
            windSpeed={windSpeed}
            city={city}
            condition={condition}
            icon={icon}
        />
    </div>
    
    
  );
}


export default WeatherContainer;
