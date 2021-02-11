import React from "react";
import "./App.css";
import QuizHandler from "./QuizHandler.js";
import LandingPage from "./LandingPage.js";

import { useStateValue } from "./StateProvider";
export default function App() {
  const [{ quiz }] = useStateValue();

  return (
    <div className="app">
      {quiz === false ? <LandingPage /> : <QuizHandler />}
    </div>
  );
}
