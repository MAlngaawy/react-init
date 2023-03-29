import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './main/Components/Counter'
import CounterContextProvider from './main/context/CounterContext'

function App() {

  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
    )
}

export default App
