import React, { useContext } from "react";
import { CounterCotext } from "../context/CounterContext";

type Props = {};

const Counter = (props: Props) => {
  const [counter, setCounter] = useContext(CounterCotext);
  return (
    <div className="flex flex-col w-screen place-items-center gap-3">
      <div>Counter Is {counter}</div>
      <button onClick={() => setCounter((v: number) => v + 1)}>
        Click To Add One
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;
