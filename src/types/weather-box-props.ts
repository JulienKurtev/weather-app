interface weatherBoxProps  {
    id?: number,
    className?: string,
    day: string,
    weatherIcon: {
        id: number,
        pod: string,
    },
    temperature: number,
    description?: string
}

export default weatherBoxProps;