import Counter from "./main/Components/Counter";
import CounterWithRedcer from "./main/Components/CounterWithRedcer";
import CounterContextProvider from "./main/context/CounterContext";
import CounterContextReducerProvider from "./main/context/CounterContextReducer";
import store from "./App/Store/store";
import { Provider } from "react-redux";
import CounterWithRedux from "./main/Components/CounterWithRedux";
import Todos from "./main/Components/Todos";

function App() {
  return (
    <Provider store={store}>
      <CounterContextProvider>
        <CounterContextReducerProvider>
          <>
            <Counter />
            <hr className="my-4 bg-gray-500 h-1 shadow-lg" />
            <CounterWithRedcer />
            <hr className="my-4 bg-gray-500 h-1 shadow-lg" />
            <CounterWithRedux />
            <Todos />
          </>
        </CounterContextReducerProvider>
      </CounterContextProvider>
    </Provider>
  );
}

export default App;
