export default function ScoreBoard({ score, total }) {
  return (
    <div className="card result">
      <h2>🏁 Quiz Completed</h2>
      <p className="score">
        Score: {score} / {total}
      </p>
    </div>
  );
}
