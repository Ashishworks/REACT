import { useState } from "react"
import { genRandom,sum } from "./help"
import "./ticket.css"
export default function Lottery() {
    let [ticket, setticket] = useState(genRandom(3));
    let won=sum(ticket)===15;
    let newTicket=()=>{
        setticket(genRandom(3))
    }
    return (
        <div>
            <h2 >Lottery</h2>
            <h3 className="box">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </h3>
            <h3>{won && "CONGRATS YOU WON!!"}</h3>
            <button onClick={newTicket}>Buy Ticket</button>
        </div>
    )
}