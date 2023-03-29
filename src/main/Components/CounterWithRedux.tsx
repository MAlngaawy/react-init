import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementBuAmount,
} from "../Slices/counterSlice";
type Props = {};

const CounterWithRedux = (props: Props) => {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <h2>Redux Counter {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <form
        className="bg-gray-200 p-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (inputRef.current) {
            dispatch(incrementBuAmount(+inputRef.current.value));
          }
        }}
      >
        <input type="number" ref={inputRef} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CounterWithRedux;
