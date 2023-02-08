import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecast from '../Forecast/Forecast';

import { API_KEY } from '../../util/weatherstack';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      weatherData: {}
    }
    this.search = this.search.bind(this)
  }


  search(searchTerm){
    const API_URL = `http://api.weatherstack.com/current?access_key=6916862fa90929f3d151e396c5d667f5&query=${searchTerm}`

    fetch(API_URL)
    .then(response => response.json())
    .then(data => this.setState({weatherData: data}))
    .catch(error => console.log(error))
   }

  render(){

    return (
      
      <div>        
        <h1>
          WeatherFinder
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-weather">
            <CurrentWeather 
            currentWeatherIcons={this.state.weatherData.current.weather_icons[0]} 
            locationName={this.state.weatherData.location.name}
            currentWeatherDescription={weatherData.current.weather_descriptions[0]}
            currentTemperature={this.state.weatherData.current.temperature} />
            <Forecast 
            locationName={this.state.weatherData.location.name}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
