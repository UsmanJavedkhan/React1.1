import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Tabbutton } from "./components/ui/tabbutton.jsx";
import { TABS_DATA } from "./data.js";
import { CARD_DATA } from "./data.js";
import Cards from "./components/ui/card.jsx";
import { Skills } from "./components/ui/Checkbox.jsx";
import { Clock } from "./components/ui/clock.jsx";
import { college } from "./data.js";
import { USEREF } from "./components/ui/USEREF.jsx";
import { Collegedata } from "./components/ui/College.jsx";
import { Unmounted } from "./components/ui/Unmounted.jsx";
import Dynamicstyling from "./components/ui/Dynamicstyling.jsx";
import { UncontrolledCom } from "./components/ui/UncontrolledCom.jsx";
import { USESFORMSTATUS } from "./components/ui/USEFORMSTATUS.jsx";
import { USETRANSITIONSTATE } from "./components/ui/USETRANSITIONSTATE.jsx";
import { USEDERIVED } from "./components/ui/DERVRD STATE.jsx";
import { Liftingstateup } from "./components/ui/LIFTING STATE UP.jsx";
import { UpdateObjectinstate } from "./components/ui/UPDATE OBJECT IN STATE.jsx";
function App() {
  function Logo() {
    return (
      <div>
        <img src={reactLogo} className="logo-vite" alt="Vite logo" />
      </div>
    );
  }

  const [currenttab, setcurrenttab] = useState("");

  function handleclick(currenttab) {
    setcurrenttab(currenttab);
    console.log(currenttab);
  }
  let tab_content = <p>Please select a topioc</p>;
  if (currenttab) {
    tab_content = (
      <div>
        <h2>{TABS_DATA[currenttab].title}</h2>
        <p>{TABS_DATA[currenttab].content}</p>
      </div>
    );
  }
  // USING DIF STATE

  // let [curname, setcurname] = useState("");
  // let [curage, setcurage] = useState("");
  // let [curemail, setcuremail] = useState("");

  // END

  // USING SINGLE STATE
  let [form, setform] = useState({
    name: "",
    age: "",
    email: "",
  });
  // END

// COLOR CLOCK
const [color,setcolor] = useState("grey");
 // END



//  HOOKS
const [counter,setcounter]= useState(0);
const [display,setdisplay]= useState(true);
function handlecounter(){
  console.log("Handle Counter clicked once",counter);
}


useEffect(()=>{
handlecounter(); 
},[]);

// useEffect(()=>{

//   return()=>{
//     console.log("unmounting phase only ");
//   };


// },[])
// END HOOKS

  return (

    <>
      <div>


      {/* COLOR CLOCK */}

      <div className="CLOCK_SECTION">
<select onChange={(e)=>setcolor(e.target.value)} >
    
    <option value="grey">Grey</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <option value="green">Green</option>

</select>

<Clock color={color}/>
      </div>

        <Logo />
        <div className="tabsection">
          <h1>Tabs</h1>
          <Tabbutton onSelect={() => handleclick("hello1")}>hello1</Tabbutton>
          <Tabbutton onSelect={() => handleclick("hello2")}>hello2</Tabbutton>
          <Tabbutton onSelect={() => handleclick("hello3")}>hello3</Tabbutton>
          <Tabbutton onSelect={() => handleclick("hello4")}>hello4</Tabbutton>
        </div>
        {tab_content}
      </div>
      <div className="card_section">
        {CARD_DATA.map((current, id) => (
          <Cards key={id} concepts={current} />
        ))}
      </div>

      {/* INPUT_SECTION  */}

      <div className="INPUT_SECTION">
        {/* FOR DIFFERENT STATES */}

        {/* <input
          value={curname}
          onChange={(e) => setcurname(e.target.value)}
          type="text"
          placeholder="Enter Name"
        />
        <p>{curname}</p>
        <input
          value={curage}
          onChange={(e) => setcurage(e.target.value)}
          type="numbers"
          placeholder="Enter Age"
        />
        <p>{curage}</p>
        <input
          value={curemail}
          onChange={(e) => setcuremail(e.target.value)}
          type="email"
          placeholder="Enter Email"
        />
        <p>{curemail}</p>
        <button
          onClick={() => {
            setcurage("");
            setcurname("");
            setcuremail("");
          }}
        >
          Clear All
        </button> */}

        {/* END */}


  {/*  USING SINGLE STATE */}
        <input
          value={form.name}
          onChange={(e) => setform({ ...form, name: e.target.value })}
          type="text"
          placeholder="Enter Name"
        />
        <p>{form.name}</p>
        <input
          value={form.age}
          onChange={(e) => setform({ ...form, age: e.target.value })}
          type="numbers"
          placeholder="Enter Age"
        />
        <p>{form.age}</p>
        <input
          value={form.email}
          onChange={(e) => setform({ ...form, email: e.target.value })}
          type="email"
          placeholder="Enter Email"
        />
        <p>{form.email}</p>
        <button onClick={() => setform({ name: "", age: "", email: "" })}>
          Clear All
        </button>

        {/* end */}
      </div>

{/* CHECKBOX */}
      <div  className="checkbox_section">

<Skills/>
      </div>

      {/* END */}

{/* COLLEGE DATA */}
<div>
{
college.map((col,index) => (
<Collegedata key={index} college={col}/>
))}
</div>
{/* END */}



{/* HOOKS */}

<div>
 <h1>USE EFFECT HOOKS</h1>
 
<button onClick={()=>setcounter(counter+1)}>Hooks{counter}</button>

<button onClick={()=>setdisplay(!display)}>toggle</button>
</div>

{display ? <Unmounted/> : null}

{/* END HOOKS */}

<Dynamicstyling/>
<USEREF/>
<UncontrolledCom/>
<USESFORMSTATUS/>
<USETRANSITIONSTATE/>
<USEDERIVED/>
<Liftingstateup/>
<UpdateObjectinstate/>
    </>
  );
}

export default App;
