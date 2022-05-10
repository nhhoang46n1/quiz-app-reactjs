import React, { useState } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";

const App: React.FC = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <div className="quiz-container">
      {isQuizStarted ? (
        <QuizScreen retry={() => setIsQuizStarted(false)} />
      ) : (
        <StartScreen start={() => setIsQuizStarted(true)} />
      )}
    </div>
  );
};

export default App;
