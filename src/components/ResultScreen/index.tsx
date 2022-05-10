import React from "react";

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
    <div>
      <div>Result Screen</div>
      <p>Your Score: {scoreQuiz}</p>
      <button onClick={retry}>Try Again</button>
      <button onClick={handleClickReview}>Review</button>
    </div>
  );
};

export default ResultScreen;
