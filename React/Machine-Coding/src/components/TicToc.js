import { useEffect, useState } from "react";

const TicToc = () => {
  return (
    <div>
      <h2 className="text-xl leading-10">7. TicToc Game</h2>
      <p>
        When user types the letter in the input box will give suggestion list to
        the user to choose (TO DO Implement Debounce and Throttling)
      </p>
      <div className="text-center border-red-400 border mt-4">
        <Board />
      </div>
    </div>
  );
};

const Board = () => {
  const [square, setSquare] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", status: "none" });

  const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  const clickHandler = (idx) => {
    if (square[idx] !== "") return;
    const updatePlayer = square.map((el, index) => {
      if (idx === index && el === "") {
        return player;
      }
      return el;
    });
    setSquare([...updatePlayer]);
    changePlayer();
  };

  const changePlayer = () => {
    if (player === "X") setPlayer("O");
    if (player === "O") setPlayer("X");
  };

  const resetHandler = () => {
    setSquare(Array(9).fill(""));
  };

  const checkWinner = () => {
    winnerPattern.forEach((currPattern) => {
      const currentPlayer = square[currPattern[0]];
      if (currentPlayer === "") return;
      let winnerFound = true;
      currPattern.forEach((el) => {
        if (square[el] !== currentPlayer) {
          winnerFound = false;
        }
      });
      if (winnerFound) {
        setResult({ winner: player, status: "Game Is Over" });
      }
    });
  };

  useEffect(() => {
    checkWinner();
  }, [square]);

  return (
    <div className="w-80 m-auto">
      <div className="flex">
        <h2 className="pt-3 pb-3">Next Player: {player}</h2>
        <button
          className="p-2 m-2 bg-cyan-200 border border-red-100"
          onClick={(e) => resetHandler()}
        >
          Reset Game
        </button>

        {result.status !== "none" && (
          <>Game is over, Player {result.winner} Won!</>
        )}
      </div>

      <div className="flex">
        <Square value={square[0]} id={0} clickHandler={clickHandler} />
        <Square value={square[1]} id={1} clickHandler={clickHandler} />
        <Square value={square[2]} id={2} clickHandler={clickHandler} />
      </div>

      <div className="flex">
        <Square value={square[3]} id={3} clickHandler={clickHandler} />
        <Square value={square[4]} id={4} clickHandler={clickHandler} />
        <Square value={square[5]} id={5} clickHandler={clickHandler} />
      </div>

      <div className="flex">
        <Square value={square[6]} id={6} clickHandler={clickHandler} />
        <Square value={square[7]} id={7} clickHandler={clickHandler} />
        <Square value={square[8]} id={8} clickHandler={clickHandler} />
      </div>
    </div>
  );
};

const Square = ({ value, id, clickHandler }) => {
  return (
    <div>
      <button
        onClick={(e) => clickHandler(id)}
        className="w-14 h-14 bg-cyan-200 border border-red-100"
      >
        {value}
      </button>
    </div>
  );
};

export default TicToc;
