import { useState } from "react"

export default function Form(){
    let [firstName,setFirstName]=useState("")
    let changeName=(event)=>{
        console.log(event.target.value)
        setFirstName(event.target.value)
    }
    return(
        <div>
            <form>
                <label htmlFor="t1">YOUR NAME   </label>
                <input placeholder="fullName" type="text" id="t1" value={firstName} onChange={changeName}></input>
                <br></br>
                <br></br>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}