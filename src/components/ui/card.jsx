import  { useEffect } from "react";
 export default function Cards({concepts}) {
  let {id,title,content} = concepts;
  
  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <div style={{margin:"10px",border:"2px solid black",padding:"10px"}}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
