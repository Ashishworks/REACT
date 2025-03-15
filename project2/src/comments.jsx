import { useState } from "react"

export default function Comments({addComment}) {
    let [changes, setchanges] = useState({
        username: "",
        remarks: "",
        rating: ""
    })
    let anyChanges = (event) => {
        setchanges((obj) => {
            return { ...obj, [event.target.name]: event.target.value } // these square brackets shows computed property name which means variable inside the [] is not actually property name but it contains the name so first the evaluated from it then used 
        })
    }
    let submit = (event) => {
        event.preventDefault()
        console.log(changes);
        addComment(changes);
        setchanges({
            username: "",
            remarks: "",
            rating: ""
        })
    }
    return (
        <div>
            <h3>Give a comment</h3>
            <form onSubmit={submit}>
                <label htmlFor="un">USERNAME   </label>
                <input placeholder="Enter username" name="username" id="un" onChange={anyChanges} value={changes.username}></input>
                <br></br>
                <br></br>
                <label htmlFor="rm">REMARKS   </label>
                <textarea placeholder="TELL YOUR EXPERIENCE" name="remarks" id="rm" onChange={anyChanges} value={changes.remarks}></textarea>
                <br></br>
                <br></br>
                <label htmlFor="pw">RATING   </label>
                <input placeholder="Enter password" name="rating" id="pw" type="number" min={1} max={5} onChange={anyChanges} value={changes.rating}></input>
                <br></br>
                <br></br>
                <button>ADD COMMENT</button>
            </form>
        </div>
    )
}