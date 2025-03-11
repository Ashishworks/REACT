import { useState } from "react"
import { genRandom,sum } from "./help"
import TicketNum from "./ticketnum"
import "./ticket.css"

export default function Lottery({n=3,winningSum=15}) {
    let [ticket, setticket] = useState(genRandom(n));
    let won=sum(ticket)===winningSum;
    let newTicket=()=>{
        setticket(genRandom(n))
    }
    return (
        <div>
            <h2 >Lottery</h2>
            <h3><TicketNum arr={ticket}/></h3>
            <h3>{won && "CONGRATS YOU WON!!"}</h3>
            <button onClick={newTicket}>Buy Ticket</button>
        </div>
    )
}