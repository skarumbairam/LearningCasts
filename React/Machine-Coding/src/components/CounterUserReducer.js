import { useReducer } from "react";

const initialState = {
  count: 0,
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decreament":
      return { ...state, count: state.count - 1 };
  }
};
const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const increament = () => {
    dispatch({ type: "increament" });
  };

  const decreament = () => {
    dispatch({ type: "decreament" });
  };

  return (
    <div>
      <h2 className="text-xl leading-10">2. Counter ( UserReducer Hook )</h2>
      <p>This component has been created using UserReducer Hook</p>

      <div className="text-center border-red-400 border mt-4">
        <button
          className="bg-slate-200 p-3 rounded-lg m-2"
          onClick={decreament}
        >
          Decreament
        </button>
        <p>{state.count}</p>

        <button
          className="bg-slate-200 p-3 rounded-lg m-2"
          onClick={increament}
        >
          Increament
        </button>
      </div>
    </div>
  );
};

export default CounterUseReducer;
