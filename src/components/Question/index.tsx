import React from "react";

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
    <div>
      <p>
        {currentQuestion} / {totalQuestions}
      </p>
      <p>{question.question_content}</p>
    </div>
  );
};

export default Question;
