import { useRef } from "react";
export function UncontrolledCom() {
  const handleform = (e) => {
    e.preventDefault();
    const user = userref.current.value;
    const pass = passref.current.value;
    console.log("user", user);
    console.log("pass", pass);
  };

  const userref=useRef(null);
  const passref=useRef(null);
  return (
      <div >
        <h1>UNCONTROLLED COMPONENT</h1>
      <form style={{
        display: "flex",
        flexDirection: "column", // stacked vertically
        gap: "15px",
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
      
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",}} action=" " method="post" onSubmit={handleform}>
        <input placeholder="ENTER NAME" style={{padding:"5px",maxWidth:"200px"}} type="text" id="user" ref={userref} />
        <input  placeholder="ENTER PASSWORD" style={{padding:"5px",maxWidth:"200px"}} type="password" id="password"  ref={passref}/>

        <button onSubmit={handleform}>Submit With Ref</button>
      </form>
    </div>
  );
}
