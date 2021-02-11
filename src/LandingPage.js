import React from "react";

import "./LandingPage.css";

import { useStateValue } from "./StateProvider";

import { naruto, deathNote, onePunchMan, onePiece } from "./questionList.js";
function LandingPage() {
  const [{ quiz, questions }, dispatch] = useStateValue();

  function narutoQuestions() {
    dispatch({
      type: "SET_quiz",
      quiz: true
    });
    dispatch({
      type: "SET_QUES",
      questions: naruto
    });
  }

  function onePieceQuestions() {
    dispatch({
      type: "SET_quiz",
      quiz: true
    });
    dispatch({
      type: "SET_QUES",
      questions: onePiece
    });
  }

  function deathNoteQuestions() {
    dispatch({
      type: "SET_quiz",
      quiz: true
    });
    dispatch({
      type: "SET_QUES",
      questions: deathNote
    });
  }
  function onepunchManQuestions() {
    dispatch({
      type: "SET_quiz",
      quiz: true
    });
    dispatch({
      type: "SET_QUES",
      questions: onePunchMan
    });
  }
  return (
    <div className="landingPage">
      <h1>Choose your anime for the quiz</h1>
      <div className="choose_one">
        <div onClick={narutoQuestions} className="anime_button">
          <img
            className="anime_img"
            alt="Naruto poster"
            src="./images/naruto/5.jpg"
          />
          <div className="anime_name">
            <p>Naruto</p>
          </div>
        </div>

        <div onClick={onePieceQuestions} className="anime_button">
          <img
            className="anime_img"
            alt="One Piece Poster"
            src="./images/onePiece/3.jpg"
          />
          <div className="anime_name">
            <p>One Piece</p>
          </div>
        </div>

        <div onClick={deathNoteQuestions} className="anime_button">
          <img
            className="anime_img"
            alt="Death Note poster"
            src="./images/deathNote/7.jpg"
          />
          <div className="anime_name">
            <p>Death Note</p>
          </div>
        </div>

        <div onClick={onepunchManQuestions} className="anime_button">
          <img
            className="anime_img"
            alt="One Punch Man poster"
            src="./images/onePunchMan/1.jpg"
          />
          <div className="anime_name">
            <p>One punch Man</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
