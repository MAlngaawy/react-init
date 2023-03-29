import React, { createContext, ReactElement, useReducer } from "react";

type Props = {
  children: ReactElement;
};

const CounterContextReducer = createContext<any>(null);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};

const CounterContextReducerProvider = ({ children }: Props) => {
  return (
    <CounterContextReducer.Provider value={useReducer(reducer, 0)}>
      {children}
    </CounterContextReducer.Provider>
  );
};

export { CounterContextReducer };
export default CounterContextReducerProvider;
