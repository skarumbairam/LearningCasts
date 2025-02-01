import { useState } from "react";

const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  const increament = () => {
    setCount((count) => count + 1);
  };
  const decreament = () => {
    setCount((count) => count - 1);
  };

  // Handle in single Method
  const counter = (type) => {
    if (type === "increament") {
      setCount((count) => count + 1);
    }
    if (type === "decreament") {
      setCount((count) => count - 1);
    }
  };

  return (
    <div>
      <h2 className="text-xl leading-10">1. Simple Counter</h2>
      <p>
        This component has been created using simple react functional component{" "}
      </p>

      <div className="text-center border-red-400 border mt-4">
        <button
          className="bg-slate-200 p-3 rounded-lg m-2"
          onClick={(e) => {
            counter("decreament");
          }}
        >
          Decreament
        </button>
        <p>{count}</p>
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

export default SimpleCounter;
