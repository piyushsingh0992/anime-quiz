import React from "react";

import "./Score.css";
import { useStateValue } from "./StateProvider";

export default function Question({
  score,
  currentquestionSetter,
  scoreSetter
}) {
  const [{ quiz }, dispatch] = useStateValue();

  function tryagain() {
    currentquestionSetter(0);
    scoreSetter(0);
  }

  function tryanother() {
    currentquestionSetter(0);
    scoreSetter(0);
    dispatch({
      type: "SET_quiz",
      quiz: false
    });
  }

  return (
    <div className="score">
      <h1>Your score is {score}</h1>
      <div>
        <button className="score_myButton" onClick={tryagain}>
          Try again
        </button>

        <button className="score_myButton" onClick={tryanother}>
          Try Another quiz
        </button>
      </div>
    </div>
  );
}
