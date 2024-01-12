import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({info}){
  

  const HOT_URL ="https://images.unsplash.com/photo-1586866811088-9e0c914bec1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMGRheXxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL="https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.webp?b=1&s=170667a&w=0&k=20&c=3nGMfD-sXDLS5jwwLV89TcEstDn00juZJ--18xie-UM=";
  return(
    <div className="InfoBox">
    <div className="cardstyle">
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image= {info.humidity>80 ? RAIN_URL: info.temp >15 ? HOT_URL : COLD_URL}
        title="Wonderland"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component ={"span"}>
        
         <p>Temperature ={info.temp}</p>
         <p>Humidity ={info.humidity}</p>
         <p>MinTemp ={info.tempMin}&deg;C</p>
         <p>MaxTemp={info.tempMax}&deg;C</p>
         <p>The weather can be describes as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C </p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    
   
    </div> 
   
  )
}