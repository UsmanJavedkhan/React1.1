
import { useState } from "react";
export function Skills() {

let [checkedItems, setCheckedItems] = useState([]);
let handlecheck = (e) => {
console.log(e.target.value, e.target.checked);
if(e.target.checked){
    setCheckedItems([...checkedItems, e.target.value]);
}
    else{
        setCheckedItems([...checkedItems.filter((items)=>items!=e.target.value)])
    }
}



  return (
    <div>
    
      <div>
        <input type="checkbox" onChange={handlecheck} value="php" id="php" />
        <label htmlFor="php">PHP</label>
      </div>
      <div>
        <input type="checkbox" onChange={handlecheck} value="js" id="js" />
        <label htmlFor="js">JS</label>
      </div>
      <div>
        <input type="checkbox" onChange={handlecheck} value="node" id="node" />
        <label htmlFor="node">NODE</label>
      </div>
      <div>
        <input type="checkbox" onChange={handlecheck} value="mongo" id="mongo" />
        <label htmlFor="mongo">MONGO DB</label>
      </div>

      <p>{checkedItems.toString()}</p>
    </div>
  );
}
