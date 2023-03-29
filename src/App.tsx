import Counter from "./main/Components/Counter";
import CounterContextProvider from "./main/context/CounterContext";

function App() {
  return (
    <CounterContextProvider>
      <Counter />
    </CounterContextProvider>
  );
}

export default App;
