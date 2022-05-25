interface forecastProps  {
    forecast: [
        {   
            dt_txt: number,
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