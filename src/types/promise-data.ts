export interface forecastData {
    current: object,
    dailyForecast: any,
}

export interface weatherData {
  coord: {
    lat: number,
    lon: number
  }
}