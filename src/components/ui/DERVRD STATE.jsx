
import React, { useState } from 'react';
export function USEDERIVED(){
    
    const [users,setusers]=useState([]);
    const [user,setuser]=useState('');
    const handleuser=(()=>{

        setusers([...users,user]);
        console.log(users);
    })
    const total_user= users.length;
    const last_user= users[users.length-1];
    const unique_user= [...new Set(users)].length;


    return(
        <div> 
<h1>TOTAL USER: {total_user}</h1>
<h1>LAST TOTAL: {last_user}</h1>
<h1>UNIQUE USER: {unique_user}</h1>
            <input onChange={(e)=>setuser(e.target.value)} type="text" />
        <button onClick={handleuser}>add user </button>
        <div style={{border:'1px solid black',width:'200px',margin:'auto'}}>
        {users.map((items,index)=><h4 style={{margin:'0%'}} key={index}>{items}</h4>)}
        </div>
        </div>
    );
}