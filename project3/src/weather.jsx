import { useState } from "react";
import SearchBox from "./searchbox";
import WeatherInfo from "./weatherinfo";

export default function Weather(){
    const [weather,setWeather]=useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });
    let updateInfo=(res)=>{
        setWeather(res);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <WeatherInfo info={weather}/>
        </div>
    )
}