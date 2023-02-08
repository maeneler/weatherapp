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
    };
    this.search = this.search.bind(this);
  }

  search(searchTerm) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=167a9004313db26dbb400c1934df3405&units=metric`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => this.setState({ weatherData: data }))
      .catch((error) => console.log(error));
  }

 
  render() {
    return (
      <div>
        <h1>WeatherFinder</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-weather">
            <CurrentWeather
              weatherData={this.state.weatherData}
              />
            {/* <Forecast weatherData={this.state.weatherData} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
