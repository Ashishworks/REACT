import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { colors } from '@mui/material';

export default function SearchBox({ updateInfo }) {
    let [city, setcity] = useState("");
    let [err, seterr] = useState(false);
    let onChange = (eve) => {
        setcity(eve.target.value)
    }
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e294f96c4d32a69bbf1206cbea220607"

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }


    let handleSubmit = async (evt) => {
        try{
        evt.preventDefault();
        console.log(city)
        await getWeatherInfo();
        setcity("")
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        seterr(false)
        }catch(err){
            seterr(true);
        }
    }
    return (
        <div>
            <h2>Search for the Weather</h2>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={onChange} />
                <br></br>
                <br></br>
                <Button variant='contained' type='submit'>Submit</Button>
            </form>
            <br></br>
           <p style={{color:"Red"}}>{err && "no such place exist"}</p>
        </div>
    )
}