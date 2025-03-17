import { useEffect, useState } from "react";

export default function Joker(){
    const url="https://official-joke-api.appspot.com/random_joke";
    let [genJoke,setGenJoke]=useState({})
    const newJoke=async ()=>{
        let response=await fetch(url);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setGenJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    }
    useEffect(()=>{
        const newJoke=async ()=>{
            let response=await fetch(url);
            let jsonResponse=await response.json();
            console.log(jsonResponse);
            setGenJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
        }
        newJoke();
    },[])
    

    return(
        <div>
            <h2>JOKER</h2>
            <h3>{genJoke.setup}</h3>
            <h3>{genJoke.punchline}</h3>
            <button onClick={newJoke}>GET A NEW JOKE</button>
        </div>
    )
}