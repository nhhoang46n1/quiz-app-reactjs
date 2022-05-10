import React from "react";
import "./button.css";

interface buttonInterface {
  currentQuestion: number;
  totalQuestions: number;
  handleNextQuestion: () => void;
  handlePreviousQuestion: () => void;
  handleSubmit: () => void;
}
const Button: React.FC<buttonInterface> = ({
  currentQuestion,
  totalQuestions,
  handleNextQuestion,
  handlePreviousQuestion,
  handleSubmit,
}) => {
  return (
    <div>
      <button
        onClick={handlePreviousQuestion}
        disabled={currentQuestion === 1 ? true : false}
      >
        Previous
      </button>
      <button
        onClick={handleNextQuestion}
        disabled={currentQuestion === totalQuestions ? true : false}
      >
        Next
      </button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Button;
