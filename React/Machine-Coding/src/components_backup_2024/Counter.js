import { useState, useReducer, useMemo } from "react";

const ACTIONS = {
  INCREAMENT: "INCREAMENT",
  DECREAMENT: "DECREAMENT",
};

const reducer = (state, action) => {
  if (action.type == ACTIONS.INCREAMENT) {
    return { count: state.count + 1 };
  }
  if (action.type == ACTIONS.DECREAMENT) {
    return { count: state.count - 1 };
  }
  return state;
};

const Counter = () => {
  // const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [arr, setArray] = useState([1, 2, 4, 8, 9]);

  const increment = () => {
    //setCount(count + 1);
    dispatch({ type: ACTIONS.INCREAMENT });
    setArray([...arr, state.count + arr.length]);
  };
  const decreament = () => {
    //setCount(count - 1);
    dispatch({ type: ACTIONS.DECREAMENT });
  };

  const showMaxValue = () => {
    console.log("I am calling unwantedly");
    return Math.max(...arr);
  };

  const momoValue = useMemo(() => {
    return showMaxValue();
  }, [arr]);

  return (
    <>
      <div className="container d-flex gap-3 p-3">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => decreament()}
        >
          -
        </button>
        <p>{state.count}</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
      <div>
        <p>Use Memo Experiment will call only update happens on array</p>
        <p>{JSON.stringify(arr)}</p>
        <p>{momoValue}</p>
      </div>
    </>
  );
};

export default Counter;
