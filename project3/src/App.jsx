import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBox from './searchbox';
import './App.css'
import WeatherInfo from './weatherinfo';
import Weather from './weather';
import './rain.css';

function App() {
  return (
    <>
    <video autoPlay loop muted className="vd">
        <source src="/rain.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Weather/>
    </>
  )
}

export default App
