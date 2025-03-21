import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';



export default function WeatherInfo({info}) {
    const INIT_IMAGE="https://static.zawya.com/view/acePublic/alias/contentid/ZWE2ODcyMjgtMjU5MC00/24/478297408.webp"
    const RAIN_URL="https://static.vecteezy.com/system/resources/thumbnails/029/771/613/small_2x/epicgraphy-shot-of-rainy-season-background-enjoying-nature-rainfall-and-happy-life-concept-generative-ai-free-photo.jpeg"
    const COLD_URL="https://media.istockphoto.com/id/1289449088/photo/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-everything-after-ice.jpg?s=612x612&w=0&k=20&c=HBpXbY4mvVDxUowmAibqHYvNqi-wIEU9DmXFxW4Cj98="

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity >80? RAIN_URL : info.temp<15? COLD_URL: INIT_IMAGE}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} 
                        <br>
                        </br>{info.humidity >80? <WaterDropIcon sx={{ color: '#1E90FF' }}/> : info.temp<15? <AcUnitIcon sx={{ color: '#72BCE2' }} />: <WbSunnyIcon sx={{ color: '#FFCC33' }} />}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temperature= {info.temp}&deg;C </p>
                        <p>Humidity={info.humidity}</p>
                        <p>Min Temp={info.tempMin}&deg;</p>
                        <p>Max Temp={info.tempMax}&deg;C</p>
                        <p>The weather can be described as {info.weather} feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}