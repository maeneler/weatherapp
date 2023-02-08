import React from "react";
import './Forecast.css';

class Forecast extends React.Component {
    render(){
        return (
            <div className="container">
                <h2>Next xxx Days in: </h2>
                <div className="weather">
                    {/* Rendering the weather api somehow */}
                </div>
            </div>
        )
    }
}

export default Forecast