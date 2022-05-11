import React, { useState } from "react";

import "./style.css";
import QuestionList from "../../data/questions.json";
import ResultScreen from "../ResultScreen";
import QuizContent from "../QuizContent";
import getCorrectAnswer, { getScoreQuiz } from "../getCorrectAnswer";

interface retryInterface {
  retry: () => void;
}

const userAnswers: any[] = [];
const QuizScreen: React.FC<retryInterface> = ({ retry }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const isEndQuestion = currentQuestionIndex === QuestionList.length;
  const [userChoice, setUserChoice] = useState(10);
  const [scoreQuiz, setScoreQuiz] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResultScreen, setShowResultScreen] = useState(false);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((pre) => pre + 1);
    setUserChoice(10);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((pre) => pre - 1);
  };

  const handleSubmit = () => {
    // setCurrentQuestionIndex((pre) => pre + 1);
    let correctAnswer = getCorrectAnswer(QuestionList);
    const tempScore = getScoreQuiz(correctAnswer, userAnswers);
    setScoreQuiz(tempScore);
    setIsSubmitted(true);
    setShowResultScreen(true);
  };

  const handleOnClickAnswer = (index: number) => {
    userAnswers[currentQuestionIndex] = index;
    setUserChoice(index);
  };

  return (
    <div className="">
      {showResultScreen ? (
        <ResultScreen
          retry={retry}
          setShowResultScreen={setShowResultScreen}
          scoreQuiz={scoreQuiz}
        />
      ) : (
        <QuizContent
          retry={retry}
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex + 1}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          handleSubmit={handleSubmit}
          handleOnClickAnswer={handleOnClickAnswer}
          userAnswer={userAnswers[currentQuestionIndex]}
          isSubmitted={isSubmitted}
          currentQuestionIndex={currentQuestionIndex}
        />
      )}
    </div>
  );
};

export default QuizScreen;
