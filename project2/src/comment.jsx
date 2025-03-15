import { useState, useEffect } from "react"
import "./box.css"
import Comments from "./comments"
export default function Comment() {
    let [comment, setComment] = useState([{
        username: "adarsh",
        remarks: "very nice",
        rating: 5
    }])
    let addComment = (comment) => {
        setComment((oldCommnets) => [...oldCommnets, comment])
    }
    useEffect(function printSomething() {
        console.log("damn it works");
    })
    return (
        <div>
            <div>
                {comment.map((c, idx) => (
                    <div className="box" key={idx}>
                        <h3>SHOW ALL COMMENTS</h3>
                        <span>{c.username}</span>
                        <br></br>
                        <span>{c.remarks}</span>
                        <br></br>
                        <span>{c.rating}</span>
                    </div>
                ))}
            </div>
            <Comments addComment={addComment} />
        </div>
    )
}