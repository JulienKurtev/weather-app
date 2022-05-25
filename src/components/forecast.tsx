import React from "react";
import WeatherBox from "./UI/weather-box";
import forecastProps from "../types/forecast-props";

class Forecast extends React.Component<forecastProps , {}> {  
  render() {
    console.log(this.props.forecast);
    const forecast = this.props.forecast.map((f, i) => {
      const weatherIcon = {
        id: f.weather[0].id,
        pod: f.sys.pod,
      };
        const weekDay = new Date(f.dt_txt).toLocaleString("en-us", {
          weekday: "short"
      });
      const temperature = Math.floor(f.main.temp);
  
        return (
          <WeatherBox
            key={i}
            temperature={temperature}
            weatherIcon={weatherIcon}
            day={weekDay}
          />
        );
    });

    return (
      <div className="weather-forecast">
        {forecast}
      </div>
    );
  }
}

export default Forecast;
