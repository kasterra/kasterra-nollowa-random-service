import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChoiceQuestion from "../components/ChoiceQuestion";
import Indicator from "../components/Indicator";
import Footer from "../components/Footer";

function Question() {
  const navigate = useNavigate();
  const [curIdx, setCurIdx] = useState(0);
  useEffect(() => {
    if (curIdx >= 10) {
      navigate("/result");
    }
    console.log(curIdx);
  }, [curIdx, navigate]);
  return (
    <div>
      <ChoiceQuestion
        question="1234?"
        choices={["a", "bbb", "cccc"]}
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
