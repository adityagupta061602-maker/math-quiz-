import { useState } from "react";
import Question from "./components/Question";
import ScoreBoard from "./components/ScoreBoard";
import Timer from "./components/Timer";
import questions from "./data/calculusQuestions";
import { calculateScore } from "./utils/scoreEngine";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">⚡ Math Quiz Dashboard</h1>

      {!finished ? (
        <>
          <Timer />
          <Question
            data={questions[current]}
            onAnswer={handleAnswer}
            index={current}
          />
        </>
      ) : (
        <ScoreBoard
          score={calculateScore(answers, questions)}
          total={questions.length}
        />
      )}
    </div>
  );
}
