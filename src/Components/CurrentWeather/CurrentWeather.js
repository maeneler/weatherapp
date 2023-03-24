import React from "react";
import './CurrentWeather.css';

class CurrentWeather extends React.Component{
    render(){
        return (
            <div className="container">
                {
                    Object.keys(this.props.weatherData).length ? (
                    <div>
                        <h2>Today's Weather in: {this.props.weatherData.name}, {this.props.weatherData.sys.country}</h2>
                        <p>Temperature: {this.props.weatherData.main.temp} degrees Celsius</p>
                        <p>{this.props.weatherData.weather[0].description}</p>
                        <img src={`http://openweathermap.org/img/wn/${this.props.weatherData.weather[0].icon}@2x.png`} />
                    </div>
                    )
                    :(
                    <p>Waiting for location input to display current weather...</p>
                    )
                }
            </div>
        )
    }
}

export default CurrentWeather
