import React from "react";
import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Forecast from "../Forecast/Forecast";

import { API_KEY } from "../../util/weatherstack";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
      forecastData: {}
    };
    this.search = this.search.bind(this);
  }

  search(searchTerm) {
    const API_URL_CURRENT = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=167a9004313db26dbb400c1934df3405&units=metric`;
    const API_URL_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=167a9004313db26dbb400c1934df3405&units=metric`;

    Promise.all([
      fetch(API_URL_CURRENT),
      fetch(API_URL_FORECAST)
    ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      if (data[0].cod === '404' || data[1].cod === '404') {
        throw new Error('City not found');
      }

      const currentWeatherData = data[0];
      const forecastData = data[1];

      const roundedTemp = Math.round(parseFloat(currentWeatherData.main.temp))
      const updatedCurrentWeatherData = {...currentWeatherData, main: {...currentWeatherData.main, temp: roundedTemp}};
      const updatedForecastData = {
        ...forecastData,
        list: forecastData.list.map((forecast) => {
          //round the temp
          const roundedForecastTemp = Math.round(parseFloat(forecast.main.temp));
          //unix timestamp to day of the week
          const date = new Date(forecast.dt * 1000);
          const dayOfWeek = date.toLocaleDateString('en-US', {weekday: 'long'})
          //return the new values
          return{
            ...forecast,
             main: { ...forecast.main, temp: roundedForecastTemp },
             dt: dayOfWeek
          };
        })
      };


      this.setState({weatherData: updatedCurrentWeatherData, forecastData: updatedForecastData})
    })
    .catch(error => {
      alert('Please enter a valid english city name')
    })
  }





  render() {
    return (
      <div className='page'>
        <h1>WeatherFinder</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-weather">
            <CurrentWeather
              weatherData={this.state.weatherData}
              />
            <Forecast forecastData={this.state.forecastData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
