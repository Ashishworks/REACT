import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from "./counter.jsx"
import Like from "./like.jsx"
import LudoBoard from './ludo.jsx'

function App() {
  return (
    // <Counter/>
    <div>
      {/* <Counter />
      <Like /> */}
      <LudoBoard/>
    </div>
  )
}

export default App
