import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox.jsx"
import { useState } from "react";
export default function WeatherApp(){
  let [winfo,setwInfo] = useState( {city:"WONDERLAND",
  feelsLike:24.84,
  temp:25.05,
  tempMin:25,
  tempMax:25,
  humidity:47,
  weather:"haze",});
  let update =(res)=>{
    setwInfo(res);
  }
return(
  <div>
    <h2>Weather Widget</h2>
    <SearchBox update ={update}/>
    <InfoBox info={winfo} />
  </div>
)
}