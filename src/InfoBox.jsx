import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox({info}) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1673240367281-15d476723285?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9nfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={INIT_URL}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {info.CityName}, {info.Country}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <div>Temprature = {info.temp}&deg;C &nbsp;&nbsp;&nbsp;Min-{info.tempMin}&deg;C&nbsp;&nbsp;&nbsp;Max-{info.tempMax}&deg;C</div>
                    <div>Feels Like = {info.feelsLike}&deg;C</div>
                    <div>Humidty = {info.humidty}%</div>
                    <div>Weather = {info.weather}</div>
                    <div>Wind Speed = {info.windSpeed}&nbsp;km/h</div>
                </Typography>
              </CardContent>
            </Card>
        </div>
    );
}