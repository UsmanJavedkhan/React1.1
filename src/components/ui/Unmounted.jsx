import { useEffect } from "react";
export function Unmounted() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    return () => {
      console.log("Component Unmounted");
    };
  }, []);
  return(
    <h1> CLICK TO TOGGLE  </h1>
  )
}
