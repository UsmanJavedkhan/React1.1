import { useState } from "react";
import { CARD_DATA } from "../../data";

import Cards from "./card";
export default function Dynamicstyling() {
    const [row,setrow] = useState( {
        display:"flex",
        flexDirection:"row",
        gap:"20px",
        borderRadius:"20px",
        
    }
);
   const changedirection = (direction) => {
        setrow({
            ...row,flexDirection:direction 
           })
    }
   const defaultdirection = (direction1) => {
        setrow({
            ...row,flexDirection:direction1
           })
    }
   
return(
    <div>
        <h1>DYNAMIC STYLING</h1>
         <div style={row}>
                {CARD_DATA.map((current, id) => (
                  <Cards  key={id} concepts={current} />
                ))}
              </div>
              <button onClick={()=>changedirection('column')}> Row to Column</button>
              <button onClick={()=>defaultdirection('row')}> Default Row</button>
    </div>
);

}