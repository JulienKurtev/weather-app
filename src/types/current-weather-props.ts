interface currentWeatherProps  {
    current: {
        main: {
            temp: number
        },
        weather: [
            {   
                id: number,
                description: string
            }
        ],
        sys: {
            pod: string
        }
    }
}

export default currentWeatherProps;