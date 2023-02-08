import React from "react";
import './CurrentWeather.css';

class CurrentWeather extends React.Component{
    

    render(){
        return (
            <div className="container">
                {
                    Object.keys(props.weatherData).length ? (
                    <div>
                        <h2>Today's Weather in:  {this.props.locationName}</h2> 
                        <p>{this.props.currentTemperature}</p>
                        <p>{this.props.currentWeatherDescription}</p>
                        <img src={this.props.currentWeatherIcons}/>
                    </div>
                    )
                    :(
                    <p>Waiting for Location input.....</p>
                    )
                }  
            </div>
        )
    }
}

export default CurrentWeather