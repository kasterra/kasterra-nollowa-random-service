import "./ChoiceQuestion.scss";

export default function ChoiceQuestion({ question, choices, onSelect }) {
  return (
    <div className="choiceQuestion">
      <div className="title">
        <h3>객관식 질문</h3>
        <h2>{question}</h2>
      </div>
      <div className="cards">
        {choices.map((choice, idx) => (
          <div key={idx} className="card" onClick={onSelect}>
            <div className="titleArea">
              <div className="idx">{idx + 1}</div>
              <div className="choice">{choice}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
