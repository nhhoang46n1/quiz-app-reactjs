import React from "react";
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
}) => {
  return (
    <div className="answer-container">
      <ul>
        {answers.map((answer, index) => {
          return (
            <li
              key={index}
              onClick={() => handleOnClickAnswer(index)}
              className={`answer-hc 
              ${userAnswer === index ? "active" : ""} 
              ${isSubmitted && answer.correct && "anwser-correct"} 
              ${
                isSubmitted &&
                userAnswer === index &&
                "anwser-incorrect"
              } 
              ${isSubmitted && "answer-disabled"}`}
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
