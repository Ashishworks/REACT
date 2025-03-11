import Num from "./num"
import "./ticketnum.css"
export default function TicketNum({arr}){
    return(
        <div className="boxy">
            <h5>Ticket</h5>
        {arr.map((num,idx)=>(
            <Num num={num} key={idx}/>
        )
    )}
    </div>)
}