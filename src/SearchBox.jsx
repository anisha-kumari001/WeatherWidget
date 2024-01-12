import "./SearchBox.css";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchBox({update}){
  let [city,setCity]= useState("");
  let [err,setErr] = useState(false);
  let url = "https://api.openweathermap.org/data/2.5/weather";
  let key = "04b984e59bc9506a984e3197cab5458d";
 
    let getWeather = async()=>{
      try{
      let response= await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
       let r = await response.json();
      let sample ={
       city: city,
       temp: r.main.temp,
       tempMin: r.main.temp_min,
       tempMax: r.main.temp_max,
       humidity:r.main.humidity,
       feelsLike: r.main.feels_like,
       weather: r.weather[0].description,
   
   
   
      };
   
      return sample;
     } catch(e){
      throw(e); 
    }
  }
 
    
  let change=(e)=>{
    setCity(e.target.value);
  }
  let submit =  async(e)=>{
    try{
      e.preventDefault();
    setCity("");
    setErr(false);
   let info = await getWeather();
   update(info);
    }catch(e){
      setErr(true);
    }
  };
  return (
    
    <div className="SearchBox">
      
      <form  onSubmit={submit}>
      <TextField id="city" label="City Name" variant="outlined" value={city} 
      onChange={change} required/>
      <br /><br />
      <Button variant="contained" type="submit" >Search</Button>
      {err && <p style={{color:"red"}}>"No such place exists"</p>}
       </form>
    </div>
  )
} 
