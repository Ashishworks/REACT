import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox(){
    let [city,setcity]=useState("");
    let onChange=(eve)=>{
        setcity(eve.target.value)
    }
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="e294f96c4d32a69bbf1206cbea220607"

    let getWeatherInfo=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse=await response.json();
        let result={
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
    }
    
    


    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city)
        getWeatherInfo();
        setcity("")
    }
    return(
        <div>
            <h2>Search for the Weather</h2>
            <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={onChange}/>
            <br></br>
            <br></br>
            <Button variant='contained' type='submit'>Submit</Button>
            </form>
        </div>
    )
}