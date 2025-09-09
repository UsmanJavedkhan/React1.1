
import {useTransition} from "react";
import Ghost from "../../assets/Ghost.gif";
export function USETRANSITIONSTATE() {
    const[pending,startpending]=useTransition();

const handlebutton= ()=>{

    startpending(async()=>{
        console.log("button click");
        await new Promise(res=>{setTimeout(res,3000)});
        console.log("button clicked");
})
}


    return(
        <div>

  <h1>USE TRANSITION STATE </h1>
  { pending? <img src={Ghost} alt="" />:null }
  <br />


  
        <button disabled={pending} onClick={handlebutton}> click </button>

        </div>
      
    );
}