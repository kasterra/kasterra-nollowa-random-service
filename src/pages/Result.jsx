import "./Result.scss";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import twitterlogo from "../images/twitterlogo.png";
import facebooklogo from "../images/facebooklogo.png";

function Result() {
  const naviagte = useNavigate();
  return (
    <div className="Result_wrap">
      <div className="Result_content">
        <div className="Result_inside">
          <h2>결과</h2>
          <span>🥳🥳 축하합니다 🥳🥳</span>
          <br />
          <div className="Result_box">
            <span>당신의 눈은 두 개입니다.</span>
          </div>
          <button
            className="restart_btn"
            onClick={() => {
              naviagte("/");
            }}
          >
            마음에 들지 않으신가요? 다시 해보기 🙄🙄
          </button>
          <br />
          <button className="Twitter_btn">
            <img src={twitterlogo} alt="twitter logo" />
            Twitter에 공유하기
          </button>
          <br />
          <button className="Facebook_btn">
            <img src={facebooklogo} alt="facebook logo" />
            Facebook에 공유하기
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Result;
