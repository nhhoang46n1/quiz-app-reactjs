import React, { useState } from "react";
import Answer from "../Answer";
import Button from "../Button";
import Question from "../Question";
import Timer from "../Timer";
import "./style.css";

interface questionInterface {
  question: {
    id: string;
    question_content: string;
    answers: { answer_content: string; correct: boolean }[];
  };
  totalQuestions: number;
  currentQuestion: number;
  userAnswer: any;
  isSubmitted: boolean;
  currentQuestionIndex: number;
  handleNextQuestion: () => void;
  handlePreviousQuestion: () => void;
  handleSubmit: () => void;
  handleOnClickAnswer: (index: number) => void;
  retry: () => void;
}

const QuizContent: React.FC<questionInterface> = ({
  question,
  totalQuestions,
  currentQuestion,
  userAnswer,
  isSubmitted,
  currentQuestionIndex,
  handleNextQuestion,
  handlePreviousQuestion,
  handleSubmit,
  handleOnClickAnswer,
  retry,
}) => {
  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="quiz-btn">
          <Button
            totalQuestions={totalQuestions}
            currentQuestion={currentQuestion}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
            handleSubmit={handleSubmit}
            retry={retry}
            isSubmitted={isSubmitted}
          ></Button>
        </div>
        <div className="quiz-question-timer">
          <div className="quiz-question-timer-container">
            <div className="quiz-timer">
              <Timer isSubmitted={isSubmitted} />
            </div>
            <div className="quiz-question">
              <Question
                question={question}
                currentQuestion={currentQuestion}
                totalQuestions={totalQuestions}
              ></Question>
            </div>
          </div>
        </div>

        <div className="quiz-answer">
          <Answer
            answers={question.answers}
            handleOnClickAnswer={handleOnClickAnswer}
            userAnswer={userAnswer}
            isSubmitted={isSubmitted}
            currentQuestionIndex={currentQuestionIndex}
          ></Answer>
        </div>
      </div>
    </div>
  );
};

export default QuizContent;
