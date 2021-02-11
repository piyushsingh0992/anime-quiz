import React from "react";

import "./Question.css";

export default function Question({ question, clickHandler }) {
  return (
    <div className="question">
      <img
        className="question_img"
        src={question?.img}
        alt="question reference"
      />
      <div>
      <div className="question_text">
        <h1>{question?.question}</h1>
      </div>

      <div className="question_options">
        {question?.a ? (
          <button className="myButton">
            <p onClick={clickHandler}>{question.a}</p>
          </button>
        ) : null}

        {question?.b ? (
          <button className="myButton">
            <p onClick={clickHandler}>{question.b}</p>
          </button>
        ) : null}

        {question?.c ? (
          <button className="myButton">
            <p onClick={clickHandler}>{question.c}</p>
          </button>
        ) : null}

        {question?.d ? (
          <button className="myButton">
            <p onClick={clickHandler}>{question.d}</p>
          </button>
        ) : null}
      </div>
      </div>
    </div>
  );
}
