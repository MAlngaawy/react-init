import React, { ReactElement } from 'react'
import { createContext, useState } from 'react';

type Props = {
  children: ReactElement
}

const CounterCotext = createContext<any>(null)

const CounterContextProvider = ({children}: Props) => {
  return (
    <CounterCotext.Provider value={useState(0)}>
      {children}
    </CounterCotext.Provider>
  )
}

export {CounterCotext}

export default CounterContextProvider