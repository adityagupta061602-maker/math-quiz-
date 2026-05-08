import Options from "./Options";

export default function Question({ data, onAnswer, index }) {
  return (
    <div className="card">
      <h2 className="question">
        Q{index + 1}. {data.question}
      </h2>
      <Options options={data.options} onAnswer={onAnswer} />
    </div>
  );
}
