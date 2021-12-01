import React from 'react';
import moment from 'moment';

const Weather = ({temprature, humidity, precip, windSpeed, city, condition, icon}) => {
     
    return (
    <div>
        <div className="row">
            <div className="col-md-7 m-0 align-bottom mb-2 mb-md-0 weather-portion">
                <div className="row h-100">
                    <div className="col">
                        <table className="h-100 w-100">
                                <tr>
                                    <td className="align-middle">
                                        <img src={icon} alt="Weather Icon"/>
                                    </td>
                                    <td className="align-middle nowrap">
                                        <span className="display-3">{Math.round(temprature)}&#176; F</span>
                                    </td>
                                </tr>
                        </table>              
                    </div>
                    <div className="col">
                        <table className="h-100">
                            <tbody>
                                <td className="align-middle">
                                    Humidity: {humidity}%<br />
                                    Wind Speed: {windSpeed} MPH<br />
                                    Precipitation: {precip} IN<br />
                                </td>
                            </tbody>
                        </table>                
                    </div>
                </div>
            </div>
            <div className="col-md-5 m-0 order-first order-md-last mb-2 mb-md-0 weather-portion relBoi">
                <h2 className="text-md-end">{city}</h2>
                <p className="lead text-md-end">{moment().format('dddd')}, {moment().format('h:mm a')}</p>
                <p className="text-md-end">{condition}</p>
            </div>
        </div>
    </div>
    );
}

export default Weather;