import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";


export default function WeatherApp() {
    
    const [weatherInfo, setWeatherInfo]= useState(
        {
            CityName: "Delhi",
            Country: "IN",
            feelsLike: 11.02,
            humidty: 93,
            temp: 11.4,
            tempMax: 11.73,
            tempMin: 11.05,
            weather: "fog",
            windSpeed:3.09,
        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div >
            <h1>Search For Weather</h1>
            <SearchBox updateInfo={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo} />
        </div>
    );
}