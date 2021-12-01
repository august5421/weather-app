import React from 'react';
import moment from 'moment';

export default function Forecast( {forecast}) {
    return (
        <div>
            <div className="row">
                <div className="col mt-0 mt-md-2">
                    <div className="row">
                       {forecast.map((data) => {
                            return (
                                <div className="col-sm mb-2 m-md-1 nowrap weather-portion relBoi">
                                    <img className="float-it-right d-sm-none" src={"https://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png"} alt="Weather Icon"/><br />
                                    <img className="d-none d-sm-block" src={"https://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png"} alt="Weather Icon"/><br />
                                    <span className="lead fw-bolder">{moment.unix(data.dt).format('LL')}</span><br />
                                    <span className="text-capitalize fw-bolder">{data.weather[0].description}</span><br />
                                    <span>Average Temp: {Math.round(data.temp.min + data.temp.max /2)}&#176; F</span><br />    
                                    <span className="text-muted">Humidity: {data.humidity}%</span><br />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}