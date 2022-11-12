import "./Indicator.scss";

export default function Indicator({ curIdx }) {
  return (
    <div className="indicator_container">
      <div className="indicators">
        {[...Array(10)].map((_, idx) => (
          <div
            key={idx}
            className={idx === curIdx ? "filled button" : "button"}
          ></div>
        ))}
      </div>
    </div>
  );
}
