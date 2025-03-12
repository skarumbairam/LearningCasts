import {
  increament,
  decreament,
  increamentByAmount,
} from "../store/counterSlice";

import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
const CounterRedux = () => {
  const dispatch = useDispatch();
  const stateCount = useSelector((store) => store.counter.count);
  const inputRef = useRef(null);
  const increament = () => {
    dispatch(increament());
  };

  const decreament = () => {
    dispatch(decreament());
  };

  const byAmount = () => {
    const val = Number(inputRef.current.value);
    console.log(typeof val);
    dispatch(increamentByAmount(val));
    inputRef.current.value = "";
  };

  return (
    <div>
      <input type="number" ref={inputRef} />
      <button onClick={byAmount}>
        Submit and Increament or Decrement by Value
      </button>
      <button onClick={increament}>+</button>
      {stateCount}
      <button onClick={decreament}>-</button>
    </div>
  );
};

export default CounterRedux;
