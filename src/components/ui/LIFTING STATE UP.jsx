import { useState } from "react";
import { Liftinginput } from "./LIFTINGINPUT.jsx";
import { LiftingDisplay } from "./LiftingDisplay.jsx";

export function Liftingstateup() {
  const [name, setname] = useState("");
  return (
    <div>
      <h1>Lifting State Up</h1>
      <p>
        In React, "Lifting State Up" refers to the practice of moving state from
        a child component to a common parent component. This is done to allow
        multiple child components to share and synchronize their state. By
        lifting the state up, you can ensure that changes made in one child
        component are reflected in others that depend on the same state.
      </p>
        <Liftinginput name={name} setname={setname} />
        <LiftingDisplay name={name} />
      
    </div>
  );
}
