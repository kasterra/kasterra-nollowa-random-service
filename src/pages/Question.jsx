import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChoiceQuestion from "../components/ChoiceQuestion";
import Indicator from "../components/Indicator";
import Footer from "../components/Footer";
import questionData from "../data/questionData";

function Question() {
  const navigate = useNavigate();
  const [questionIdx, setQuestionIdx] = useState(
    Math.floor(Math.random() * 15)
  );
  const [curIdx, setCurIdx] = useState(0);
  useEffect(() => {
    setQuestionIdx(Math.floor(Math.random() * 15));
    if (curIdx >= 10) {
      navigate("/result");
    }
    console.log(curIdx);
  }, [curIdx, navigate]);
  return (
    <div>
      <ChoiceQuestion
        question={questionData[questionIdx].question}
        choices={[
          questionData[questionIdx].answer1,
          questionData[questionIdx].answer2,
          questionData[questionIdx].answer3,
        ]}
        onSelect={() => {
          setCurIdx((prev) => prev + 1);
        }}
      />
      <Indicator curIdx={curIdx} />
      <Footer />
    </div>
  );
}

export default Question;
