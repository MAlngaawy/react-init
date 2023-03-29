import Counter from "./main/Components/Counter";
import CounterWithRedcer from "./main/Components/CounterWithRedcer";
import CounterContextProvider from "./main/context/CounterContext";
import CounterContextReducerProvider from "./main/context/CounterContextReducer";

function App() {
  let test = 0;
  let setTest = (newTest: number) => (test = newTest);

  return (
    <CounterContextProvider>
      <CounterContextReducerProvider>
        <>
          <Counter />
          <hr className="my-4 bg-gray-500 h-1 shadow-lg" />
          <CounterWithRedcer />
          <hr className="my-4 bg-gray-500 h-1 shadow-lg" />
          <h1>{test}</h1>
          <button onClick={() => setTest(5)}>SetTest</button>
        </>
      </CounterContextReducerProvider>
    </CounterContextProvider>
  );
}

export default App;
