import { useState } from "react";

function Counter(){
    let [count,setCount]=useState(0);
    let IncCount=()=>{
        setCount(count+1);
        console.log(count);
    }
    
    return(
        <>
        <button onClick={IncCount}>CLICK HERE</button>
        <p style={{color: "red"}}>{count}</p>
        </>
    )
}

export default Counter;

