import React, { useContext } from 'react'
import { CounterCotext } from '../context/CounterContext'

type Props = {}

const Counter = (props: Props) => {
  const [counter, setCounter] = useContext(CounterCotext)
  return (
    <>
    <div>Counter Is {counter}</div>
    <button onClick={() => setCounter((v: number) => v+1)}>
      Click To Add One
    </button>
    <button onClick={() => setCounter(0)}>
      Reset
    </button>
    </>
  )
}

export default Counter