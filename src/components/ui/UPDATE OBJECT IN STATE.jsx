import{ useState} from "react";
export function UpdateObjectinstate(){

    const [Data,setData]=useState({
        name:'usman',
        age:'23',
        address:{
            city:'Lahore',

        },
    });
  const  handleName=((val)=>{
    Data.name=val;
    setData((prevdata)=>({
...prevdata, 
name: val,
    } ));

  } )
const handleCity = (city) => {
  setData((prevData) => ({
    ...prevData,
    address: {
      ...prevData.address,
      city: city,
    },
  }));
};


    return(
<div>
    <h1>UPDATE OBJECT IN STATE</h1>
    <input type="text" onChange={(event)=>handleName(event.target.value)} />
    <input type="text" onChange={(event)=>handleCity(event.target.value)} />
  
    <p>{Data.name}</p>
    <p>{Data.address.city}</p>
</div>

    );
}