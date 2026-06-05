import { useState } from "react";

import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

import { questions } from "./data/questions";
import { results } from "./data/results";

import { calcMBTI } from "./utils/calcMBTI";
import { styles } from "./styles/styles";

export default function MBTITest() {
  const [screen, setScreen] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);

  const handleStart = () => {
    setScreen("quiz");
    setCurrent(0);
    setAnswers([]);
    setResult(null);
    setSelected(null);
  };

  const handleAnswer = (type) => {
    if (animating || selected !== null) return;

    setSelected(type);
    setAnimating(true);

    const newAnswers = [...answers, type];

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setAnswers(newAnswers);
        setSelected(null);
        setAnimating(false);
      } else {
        const mbti = calcMBTI(newAnswers);

        setResult(
          results[mbti] || results["ENFP"]
        );

        setScreen("result");
        setAnimating(false);
      }
    }, 600);
  };

  const handleRetry = () => {
    setScreen("intro");
    setSelected(null);
    setAnimating(false);
  };

  const progress = Math.round(
    (current / questions.length) * 100
  );

  return (
    <div style={styles.root}>
      <div style={styles.bg1} />
      <div style={styles.bg2} />
      <div style={styles.bg3} />

      <div style={styles.card}>
        {screen === "intro" && (
          <Intro
            styles={styles}
            handleStart={handleStart}
          />
        )}

        {screen === "quiz" && (
          <Quiz
            styles={styles}
            current={current}
            questions={questions}
            selected={selected}
            progress={progress}
            handleAnswer={handleAnswer}
          />
        )}

        {screen === "result" && result && (
          <Result
            result={result}
            results={results}
            styles={styles}
            handleRetry={handleRetry}
          />
        )}
      </div>

      <p style={styles.footer}></p>
    </div>
  );
}