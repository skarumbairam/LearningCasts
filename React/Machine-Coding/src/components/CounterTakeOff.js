import { useEffect, useState } from "react";

function App() {
  const [countDown, setCountDown] = useState(30);
  const [showTakeOff, setShowTakeOff] = useState(false);

  const decreaseCount = () => {
    setCountDown((countDown) => (countDown -= 1));
  };

  useEffect(() => {
    const setIntervalId = setInterval(decreaseCount, 1000);

    if (countDown === 0) {
      setShowTakeOff(true);
    }

    return () => {
      console.log("Removed!");
      clearInterval(setIntervalId);
    };
  }, [countDown]);

  const resetHandler = () => {
    if (!showTakeOff) {
      console.log("Inside condition!!");
      setCountDown(30);
    }
  };
  return (
    <div>
      {showTakeOff ? (
        <p>TakeOff</p>
      ) : (
        <>
          <p> countDown : {countDown}</p>
          <button onClick={resetHandler}> Reset </button>
        </>
      )}
    </div>
  );
}

export default App;
