import React from "react";
import "./question.css";
interface questionInterface {
  question: {
    question_content: string;
  };
  currentQuestion: number;
  totalQuestions: number;
}

const Question: React.FC<questionInterface> = ({
  question,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <div className="question-content">
      <p className=" total-questions">
        {`Question: ${currentQuestion} / ${totalQuestions}`}
      </p>
      <p>{question.question_content}</p>
    </div>
  );
};

export default Question;
