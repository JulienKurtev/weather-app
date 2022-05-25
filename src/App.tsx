import React from 'react';
import Cities from './components/cities/cities-list';
import CurrentWeather from './components/current-weather';
import Forecast from './components/forecast';
import * as weatherApi from "./api/weather";
import Spinner from './components/UI/spinner';
import weatherState from './types/weather-state';


class App extends React.Component<{}, weatherState>
{
  constructor(props:any) {
    super(props);
    this.state = {
      location: '',
      forecast: [],
      current: null,
      isLoading: false,
      error: false,
    };

    this.retrieveTemperature = this.retrieveTemperature.bind(this);
  }

  async retrieveTemperature(location: string) {
    this.setState({ isLoading: !this.state.isLoading });
    
    try{
      const weatherRes = await weatherApi.getWeatherBasedOnLocation(location);
      const forecastRes = await weatherApi.getForecast(
        weatherRes.coord.lat,
        weatherRes.coord.lon
      );

      console.log(forecastRes.current);
      console.log(forecastRes.dailyForecast);
      this.setState({
        isLoading: false,
        location,
        current: forecastRes.current,
        forecast: forecastRes.dailyForecast,
        error: false,
      });
    }catch(err){
      this.setState({ 
        isLoading: false,
        error: true
      });
    }
  }
  
  render() {

    let view = null;

    if(!this.state.current &&
       !this.state.isLoading &&
       !this.state.error) {

      view = <p className="text-center">Please, choose city!</p>;

    }else if(this.state.isLoading){

      view = <Spinner />;

    }else if(this.state.forecast.length > 0 &&
            !this.state.isLoading && 
            !this.state.error){

      view = <div className="weather-container"> 
        <CurrentWeather current={this.state.current} />
        <Forecast forecast={this.state.forecast} />
      </div>;

    }else if (this.state.error){
      view = <p className='text-center'>Something, went wrong!</p>
    }

    return (
      <div className="section-weather">
          <div className="section-weather__content">
            <Cities retrieveTemperature={this.retrieveTemperature} location={this.state.location}/>
            {view}
          </div>
      </div>
    );
  }
}

export default App;
