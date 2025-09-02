
import { useEffect,useState } from "react";

export function Clock({color}){
   const [time,settime]=useState(new Date().toLocaleTimeString());
   useEffect(()=>{
    setInterval(() => {
        settime(new Date().toLocaleTimeString());
    }, 1000);
   
    },[])



    return(
        <div>
            <h1 style={{
                color: color
            }}>{time}</h1>
        </div>
        
    );
}