import React, { useContext, useState } from "react";
import { CounterContextReducer } from "../context/CounterContextReducer";

type Props = {};

const CounterWithRedcer = (props: Props) => {
  const [counterValue, dispatch] = useContext(CounterContextReducer);
  console.log(useState(5));

  return (
    <div className="flex flex-col w-screen place-items-center gap-3">
      <div>Counter Is {counterValue}</div>
      <button onClick={() => dispatch({ type: "add" })}>
        Click To Add One
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterWithRedcer;
