import React from "react";
import "./button.css";

interface buttonInterface {
  currentQuestion: number;
  totalQuestions: number;
  isSubmitted: boolean;
  handleNextQuestion: () => void;
  handlePreviousQuestion: () => void;
  handleSubmit: () => void;
  retry: () => void;
}
const Button: React.FC<buttonInterface> = ({
  currentQuestion,
  totalQuestions,
  isSubmitted,
  handleNextQuestion,
  handlePreviousQuestion,
  handleSubmit,
  retry,
}) => {
  return (
    <div className="button-container">
      <button
        className={`pre-btn btn ${currentQuestion === 1 ? "disabled" : ""}`}
        onClick={handlePreviousQuestion}
        disabled={currentQuestion === 1 ? true : false}
      >
        Previous
      </button>

      <button
        className={`next-btn btn ${
          currentQuestion === totalQuestions ? "disabled" : ""
        }`}
        onClick={handleNextQuestion}
        disabled={currentQuestion === totalQuestions ? true : false}
      >
        Next
      </button>
      {
        isSubmitted ? (<button className="submit-btn btn" onClick={retry}>
        Retry
      </button>) : (<button className="submit-btn btn" onClick={handleSubmit}>
        Submit
      </button>)
      }
    </div>
  );
};

export default Button;
