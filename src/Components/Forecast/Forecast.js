import React from "react";
import './Forecast.css';

class Forecast extends React.Component {
    render(){
        return (
            <div className="container">
                 {
                    Object.keys(this.props.forecastData).length ? (
                    <>
                    <h2>Next 5 Days in: {this.props.forecastData.city.name}, {this.props.forecastData.city.country}</h2>
                    <div className="forecast">
                        {/* Hardcoded the indexes because i dont have a daily forecast,
                        only 3 hour for the next 5 days --> so 24 hours into the future */}
                        {[7, 15, 23, 31, 39].map((index) => (
                            <div key={index}>
                                <h3>{this.props.forecastData.list[index].dt}</h3>
                                <p>Temp: {this.props.forecastData.list[index].main.temp}&#8451;</p>
                                <p>{this.props.forecastData.list[index].weather[0].description}</p>
                                <img src={`http://openweathermap.org/img/wn/${this.props.forecastData.list[index].weather[0].icon}@2x.png`} />
                            </div>
                        ))}
                    </div>
                    </>

                    )
                    :(
                    <p>Waiting for location input to display forecast...</p>
                    )
                }
            </div>
        )
    }
}

export default Forecast
