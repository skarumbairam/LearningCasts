import { useReducer } from "react";

const ACTIONS = {};
const initialState = {
  count: 0,
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decreament":
      return { ...state, count: state.count - 1 };
    default:
      return { ...state };
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const increament = () => {
    dispatch({ type: "increament" });
  };

  const decreament = () => {
    dispatch({ type: "decreament" });
  };

  return (
    <div>
      <button onClick={increament}>+</button>
      {state.count}
      <button onClick={decreament}>-</button>
    </div>
  );
};

export default CounterReducer;
