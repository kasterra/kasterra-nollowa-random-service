import Footer from "../components/Footer";
import "./Main.scss";
import laptop from "../images/laptop.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  console.log(laptop);
  let navigate = useNavigate();
  return (
    <div className="Main_wrap">
      <div className="Main_content">
        <div className="Main_inside">
          <h2>헉! 타이어 신발보다 싸다</h2>
          <div>
            <img src={laptop} alt="laptop" />
            <div>
              <h2>오늘 점심 메뉴 추천기</h2>
              <span>당신의 시간을 알차게 낭비해보세요</span>
              <button
                className="start_btn"
                onClick={() => {
                  navigate("./loading");
                }}
              >
                시작하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
