import { forecastData, weatherData } from "../types/promise-data";

const baseURL =  "https://api.openweathermap.org/data/2.5/";

const getWeatherBasedOnLocation = async (location : String) : Promise<weatherData> => {
     const res = await fetch(
        `${baseURL}/weather?q=${location}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=metric`
      )

      return await res.json();
};
  
const getForecast = async (lat : number, lon: number) : Promise<forecastData> => {
    
    const res = await fetch(
        `${baseURL}/forecast?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_WEATHER_APP_API}&units=metric`
      )

      const data = await res.json()

  // The daily end point is allowed only on the premium version of openweatherAPI
  // so we do a workaround to take the daily forecast
   const dailyForecast = [];
   
   for(let i = 0; i < data.list.length; i+=8){
    dailyForecast.push(data.list[i]);
   }

   const current = dailyForecast.pop();
    
  return { current , dailyForecast} ;
};

export { getWeatherBasedOnLocation, getForecast };