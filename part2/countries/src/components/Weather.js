import { clear } from "@testing-library/user-event/dist/clear"
import { useEffect, useState } from "react"

const Weather = ({ latitude, longitude }) => {
    console.log('latLong: ', latitude, longitude)
    const [weather, setWeather] = useState({
        temperature: 0,
        condition: clear,
        windspeed: 0
    })

    useEffect(() => {
        const weatherAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        console.log('weather effect', weatherAPI)
        fetch(weatherAPI)
            .then(response => response.json())
            .then(json => {
                console.log('json: ', json)
                setWeather({
                    temperature: json.current_weather.temperature,
                    condition: weatherCodes[json.current_weather.weathercode],
                    windspeed: json.current_weather.windspeed
                })
            })        
    }, [])

    const weatherCodes = {
        0: "clear sky",
        1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast clouds",
        45: "Fog", 48: "Fog",
        61: "Rainig", 63: "Rainig", 65: "Rainig",
        71: "Snow fall", 73: "Snow fall", 75: "Snow fall",
        95: "Thunder storm"
    }

    return (
        <>
            <h3>Weather</h3>
            <p>temperature: {weather.temperature}C</p>
            <p>{weather.condition}</p>
            <p>wind: {weather.windspeed}m/s</p>
        </>
    )
}

export default Weather