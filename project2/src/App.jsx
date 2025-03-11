import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./counter.jsx"
import Like from "./like.jsx"
import LudoBoard from './ludo.jsx'
import ToDoList from './toDoList.jsx'
import Lottery0 from './lottery0.jsx'
import Num from './num.jsx'
import TicketNum from './ticketnum.jsx'
import Lottery from './lottery.jsx'
import { sum } from './help.js'

function App() {
  let winCondition=(ticket)=>{
    return sum(ticket)===15;
  };
  return (
    // <Counter/>
      /* <Counter />
      <Like /> */
      // <LudoBoard/>
      // <ToDoList/>
      // <Lottery0/>
      <div>
        <h1>Lottery</h1>
      {/* <TicketNum arr={[1,2,3]}/>
      <TicketNum arr={[1,2,3,4,5]}/> */}
      <Lottery n={3} c={winCondition}/>
      </div>
      )
}

export default App
