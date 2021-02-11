import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import Question from "./Question.js";
import Score from "./Score.js";

import "./QuizHandler.css";

export default function App() {
  const [{ questions }] = useStateValue();
  let [currentquestion, currentquestionSetter] = useState(0);
  let [score, scoreSetter] = useState(0);

  let audio = new Audio(questions[0].audio);

  function clickHandler(event) {
    if (event.target.innerText === questions[currentquestion].ans) {
      scoreSetter(score + 1);
    }
    currentquestionSetter(currentquestion + 1);
    audio.pause();
    audio.play();
  }

  return (
    <div className="quizHandler">
      {currentquestion < questions.length ? (
        <Question
          question={questions[currentquestion]}
          clickHandler={clickHandler}
        />
      ) : (
        <Score
          score={score}
          currentquestionSetter={currentquestionSetter}
          scoreSetter={scoreSetter}
        />
      )}
    </div>
  );
}
