interface forecastProps  {
    forecast: [
        {   
            dt: number,
            main: {
                temp: number
            }
            weather: [
                {
                    id: number
                }
            ],
            sys: {
                pod: string
            }
        }
    ]
}

export default forecastProps;