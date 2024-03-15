import { useEffect, useState, useContext } from "react";
import { Patterns } from "../util/data";
import { UserNameContext } from "../App";

const TicTocComponent = () => {
  const userName = useContext(UserNameContext);
  return (
    <div className="container">
      {userName}
      <Board />
    </div>
  );
};
export default TicTocComponent;

const Board = () => {
  const [square, setSquare] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", status: "none" });
  const winnerPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 4, 2],
    [0, 4, 8],
  ];

  const onClickHandler = (index) => {
    if (square[index] !== "") return;
    const currentPlayer = square.map((el, id) => {
      if (id === index && el === "") {
        return player;
      }
      return el;
    });
    setSquare([...currentPlayer]);
    changePlayer();
  };

  const changePlayer = () => {
    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }

    return player;
  };

  const resetHandler = () => {
    setPlayer("X");
    setSquare(Array(9).fill(""));
  };

  const checkWinner = () => {
    winnerPattern.forEach((pattern) => {
      const currentPlayer = square[pattern[0]];
      if (currentPlayer === "") return;
      let foundWinner = true;
      pattern.forEach((el) => {
        if (square[el] !== currentPlayer) {
          foundWinner = false;
        }
      });

      if (foundWinner) {
        setResult({ winner: player, status: "Won the game!" });
      }
    });
  };

  useEffect(() => {
    checkWinner();
  }, [square]);

  return (
    <>
      <div className="bord">
        {result.status !== "none" && (
          <>Game is over, Player {result.winner} Won!</>
        )}
        <div className="row1 d-flex">
          <Square value={square[0]} clickSquare={onClickHandler} index={0} />
          <Square value={square[1]} clickSquare={onClickHandler} index={1} />
          <Square value={square[2]} clickSquare={onClickHandler} index={2} />
        </div>
        <div className="row2 d-flex">
          <Square value={square[3]} clickSquare={onClickHandler} index={3} />
          <Square value={square[4]} clickSquare={onClickHandler} index={4} />
          <Square value={square[5]} clickSquare={onClickHandler} index={5} />
        </div>
        <div className="row3 d-flex">
          <Square value={square[6]} clickSquare={onClickHandler} index={6} />
          <Square value={square[7]} clickSquare={onClickHandler} index={7} />
          <Square value={square[8]} clickSquare={onClickHandler} index={8} />
        </div>
      </div>
      <button onClick={() => resetHandler()}> Reset Game </button>
    </>
  );
};

const Square = ({ value, clickSquare, index }) => {
  const clickHandler = () => {
    clickSquare(index);
  };
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn-outline-primary d-flex justify-content-center align-items-center"
        style={{ width: "70px", height: "70px" }}
        onClick={() => clickHandler()}
      >
        {value}
      </button>
    </div>
  );
};
