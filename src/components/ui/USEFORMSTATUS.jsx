import { useFormStatus } from "react-dom";
export function USESFORMSTATUS() {

const handleform = async()=>{
    
    await  new Promise((resolve)=>{
        setTimeout(() => {
            console.log("form submitted");
            resolve();
        }, 3000);
    
})
}
function Customerformstatus(){
    const {pending} = useFormStatus();
    return(
     <div> 
         <input type="text" placeholder="ENTER NAME"/>
        <br />
        <br />
        <input type="text" placeholder="ENTER PASS"/>
        <br />
        <br />
        <button disabled={pending}>{pending?'submitting':'submit'}</button>
     </div>  
    )
    
}

    return(

<div>
    <h1>USE FORM STATUS</h1>
    <form action={handleform}>
       <Customerformstatus/>
    </form>
</div>

    );
}
