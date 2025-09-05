
import { useRef } from "react";
import { useState } from "react";
export function USEREF() {

    const inputref = useRef(null);
    const inputhandler = () => {
        console.log(inputref);
        inputref.current.style.border = "2px solid red";
       
        inputref.current.style.borderRadius = "5px";
        inputref.current.style.color = "green";
        inputref.current.focus();
        // inputref.current.value = " ";
    
    } 
    const [display,setdisplay]= useState(true);
        
    return(
<div>

     <h1>USE REF</h1>

    
{display ? <input style={{padding:"8px", marginRight:"10px"}} ref={inputref} type="text" placeholder="ENTER USER NAME " />:null}
    
    <button  onClick={inputhandler}>Submit</button> 
    <button onClick={()=>setdisplay(!display)}>toggle</button>
</div>
       
    );
}