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
  handleNextQuestion: () => void;
  handlePreviousQuestion: () => void;
  handleSubmit: () => void;
  handleOnClickAnswer: (index: number) => void;
  currentQuestionIndex: number;
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
}) => {
  return (
    <div className="question-container">
      <div className="">
        <div className="question-btn">
          <Button
            totalQuestions={totalQuestions}
            currentQuestion={currentQuestion}
            handleNextQuestion={handleNextQuestion}
            handlePreviousQuestion={handlePreviousQuestion}
            handleSubmit={handleSubmit}
          ></Button>
        </div>
        <div className="timer-question">
          <div className="timer">
            <Timer />
          </div>
          <div>
            <Question
              question={question}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            ></Question>
          </div>
        </div>

        <div className="answer">
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
