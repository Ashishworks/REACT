import { useState } from "react"

export default function FormObj(){
    let [changes,setchanges]=useState({
        fullname: "",
        username: "",
        password: ""
    })
    let anyChanges=(event)=>{
        setchanges((obj)=>{
            return {...obj,[event.target.name]: event.target.value} // these square brackets shows computed property name which means variable inside the [] is not actually property name but it contains the name so first the evaluated from it then used 
        })
    }
    let submit=(event)=>{
        event.preventDefault()
        console.log(changes);
        setchanges({
            fullname: "",
            username: "",
            password: ""
        })
    }
    return(
        <form onSubmit={submit}>
            <label htmlFor="fn">FULL NAME   </label>
            <input placeholder="Enter fullName" name="fullname" id="fn" onChange={anyChanges} value={changes.fullname}></input>
            <br></br>
            <br></br>
            <label htmlFor="un">USERNAME   </label>
            <input placeholder="Enter username" name="username" id="un" onChange={anyChanges} value={changes.username}></input>
            <br></br>
            <br></br>
            <label htmlFor="pw">PASSWORD   </label>
            <input placeholder="Enter password" name="password" id="pw" type="password" onChange={anyChanges} value={changes.password}></input>
            <br></br>
            <br></br>
            <button>SUBMIT</button>
        </form>
    )
}