import React from "react";
import "./style.css";

interface startInterface {
  start: () => void;
}

const StartScreen: React.FC<startInterface> = ({ start }) => {
  return (
    <div className="start-screen-wrapper">
      <div className="start-screen-container">
        <p>QUIZ APP</p>
        <button onClick={start}>START</button>
      </div>
    </div>
  );
};

export default StartScreen;
