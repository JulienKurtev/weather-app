import React from "react";
import WeatherBox from "./UI/weather-box";
import currentWeatherProps from "../types/current-weather-props";


class CurrentWeather extends React.Component<currentWeatherProps , {}> {
  render() {
    const temperature = Math.floor(this.props.current.main.temp);
    const description = this.props.current.weather[0].description;
    const weatherIcon = {
      id: this.props.current.weather[0].id,
      pod: this.props.current.sys.pod,
    };
    
    return (
      <WeatherBox
        className='weather--current'
        temperature={temperature}
        description={description}
        weatherIcon={weatherIcon}
        day='Today'
      />
    );
  }
}

export default CurrentWeather;
