import React, { useState } from "react";
import "./answer.css";

interface answerInterface {
  answers: { answer_content: string; correct: boolean }[];
  handleOnClickAnswer: (index: number) => void;
  userAnswer: any;
  isSubmitted: boolean;
  currentQuestionIndex: number;
}
const Answer: React.FC<answerInterface> = ({
  answers,
  userAnswer,
  handleOnClickAnswer,
  isSubmitted,
  currentQuestionIndex,
}) => {
  return (
    <div className="answer-container">
      <ul>
        {answers.map((answer, index) => {
          return (
            <li
              key={index}
              onClick={() => handleOnClickAnswer(index)}
              className={`${isSubmitted && answer.correct && "anwser-correct"} 
              ${
                isSubmitted &&
                userAnswer !== answer.correct &&
                userAnswer === index &&
                "anwser-incorrect "
              } ${userAnswer === index ? "active" : ""}`}
            >
              {answer.answer_content}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answer;
