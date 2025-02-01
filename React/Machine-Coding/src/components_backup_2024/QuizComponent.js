import React, { useState } from "react";
import { QuizData } from "../util/data.js";

const QuizeComponent = (props) => {
  const [currentQuiz, setCuttetQuiz] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCuttetQuiz(currentQuiz + 1);
    setUserAnswer([...userAnswer, isCorrect]);
    console.log(userAnswer);
  };
  return (
    <div className="container">
      <h5>Quiz World</h5>
      <div className="question">
        {currentQuiz < QuizData.length && (
          <Question
            quizData={QuizData[currentQuiz]}
            selectAnswer={handleNextQuestion}
          />
        )}

        {currentQuiz == QuizData.length && (
          <Result quesitons={QuizData} answers={setUserAnswer} />
        )}
      </div>
    </div>
  );
};

const Question = ({ quizData, selectAnswer }) => {
  const onClickHandler = (isCorrect) => {
    selectAnswer(isCorrect);
  };
  return (
    <div>
      <h3>{quizData.question}</h3>
      <ul>
        {quizData.answerOptions.map((item) => {
          return (
            <li key={item.text}>
              <button onClick={() => onClickHandler(item.isCorrect)}>
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Result = ({ quesitons, answers }) => {
  console.log("answers", answers);
  //const correctAnswer = answers.filter((answer) => answer);
  return (
    <div>
      <h4>
        You answered {answers.length} of {quesitons.length}
      </h4>
    </div>
  );
};
export default QuizeComponent;
