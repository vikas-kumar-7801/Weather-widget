import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState();
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "6ef091c0d258416a186c585c02d796bf";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            CityName: jsonResponse.name, 
            Country: jsonResponse.sys.country,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidty: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
            windSpeed: jsonResponse.wind.speed,
        }
        console.log(result);
        return result;
    }


    let handelChange = (event) => {
        setCity(event.target.value)
    }

    let handelSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }

    return (
        <div className='SearchBox'>

            <form onSubmit={handelSubmit}>

            <div className='textField'>
            <TextField
             id="city" 
             label="City Name" 
             variant="outlined" 
             color="success"
             onChange={handelChange} 
             value={city}
             required/>
            </div>
            <br /><br />
            <Button variant="contained" endIcon={<SearchIcon />} type='submit' className="button">Search</Button>

            </form>
        </div>
    );
}
