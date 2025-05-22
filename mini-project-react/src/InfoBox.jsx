 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import WindPowerIcon from '@mui/icons-material/WindPower';
 import FoggyIcon from '@mui/icons-material/Foggy';
 import CloudIcon from '@mui/icons-material/Cloud';
 import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
 import  SevereColdIcon from '@mui/icons-material/SevereCold'; 
 
 export default function InfoBox ({info}){
    const INIT_URL =
    "https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let COLD_URL =
    "https://images.unsplash.com/photo-1616951849649-74dd2dd7e662?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT_URL =
    "https://images.unsplash.com/photo-1743738049563-520b88442d04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let CLOUD_URL =
    "https://images.unsplash.com/photo-1673784127423-d8a365b2f371?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let SNOW_URL =
    "https://images.unsplash.com/photo-1644372317463-63417c597e77?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let FOG_URL =
    "https://images.unsplash.com/photo-1582076198523-57cea81a1baa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let WIND_URL =
    "https://images.unsplash.com/photo-1611101143675-ebe68cb30077?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let THUNDER_URL =
    "https://plus.unsplash.com/premium_photo-1727513101945-ac248a791597?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let DRIZZLE_URL =
    "https://images.unsplash.com/photo-1623508488401-badfadea0157?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HAZE_URL ="https://images.unsplash.com/photo-1702045648028-461997461916?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    
    

    return (
        <div className="InfoBox">
            
            <div className= "cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity > 80 
            ? RAIN_URL
            : info.temp < 10
            ? COLD_URL
            : info.temp > 30
            ? HOT_URL 
            : info.weather === "Fog"
            ? FOG_URL
            : info.weather === "Clouds"
            ? CLOUD_URL
            : info.weather === "Snow"
            ? SNOW_URL
            : info.weather === "Wind"
            ? WIND_URL
            : info.weather === "Thunderstorm"
            ? THUNDER_URL
            : info.weather === "Drizzle"
            ? DRIZZLE_URL
            : HAZE_URL

        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity > 80 
            ? <UmbrellaIcon></UmbrellaIcon>
            : info.temp < 10
            ? <SevereColdIcon></SevereColdIcon>
            : info.temp > 30
            ?<SunnyIcon></SunnyIcon>
            : info.weather === "Fog"
            ? <FoggyIcon></FoggyIcon>
            : info.weather === "Clouds"
            ? <CloudIcon></CloudIcon>
            : info.weather === "Snow"
            ? <CloudySnowingIcon></CloudySnowingIcon>
            : info.weather === "Wind"
            ? <WindPowerIcon></WindPowerIcon>
            : info.weather === "Thunderstorm"
            ? <ThunderstormIcon></ThunderstormIcon>
            : info.weather === "Drizzle"
            ? <AcUnitIcon></AcUnitIcon>
            :<LocalFloristIcon></LocalFloristIcon>
          }
        </Typography>
        

        <Typography variant="body2" sx={{ color: 'text.secondary'  }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as <b><i>{info.weather}</i></b> and feels like = {info.feelslike}&deg;C</p>

          
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}

 