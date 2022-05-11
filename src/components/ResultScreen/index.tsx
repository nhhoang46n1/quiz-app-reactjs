import React from "react";
import "./style.css";

interface resultScreenInterface {
  retry: () => void;
  scoreQuiz: number;
  setShowResultScreen: any;
}
const ResultScreen: React.FC<resultScreenInterface> = ({
  retry,
  scoreQuiz,
  setShowResultScreen,
}) => {
  const handleClickReview = () => {
    setShowResultScreen(false);
  };
  return (
    <div className="result-container">
      <div className="result-content">
        <h2>Result Screen</h2>
        <p>Your Score: {scoreQuiz}</p>
        <div className="result-btn ">
          <button className="btn"onClick={retry}>Try Again</button>
          <button className="btn "onClick={handleClickReview}>Review</button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
