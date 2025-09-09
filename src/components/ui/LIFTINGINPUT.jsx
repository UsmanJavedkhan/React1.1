export function Liftinginput({name,setname}){


    return(
        <div>
            <input value={name} placeholder="ENTER NAME " onChange={(e)=>setname(e.target.value)} type="text" />
        </div>
    );
}