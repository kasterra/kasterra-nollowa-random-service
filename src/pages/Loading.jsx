import Footer from "../components/Footer";
import { RotatingLines } from  'react-loader-spinner';
import "./Loading.scss";
import { useNavigate } from "react-router-dom";

function Loading() {
    let navigate = useNavigate();
    return(
        <div className="Loading_wrap">
            <div className="Loading_box">
                <RotatingLines
                    className="Loading"
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="100"
                    visible={true}
                />
            </div><br />
            <h1>잠시만 기다려주세요🙏🏻</h1>
            <span className="Real_start" onClick={()=>{navigate('/question')}}>진짜로 시작하기</span>
            <Footer />
        </div>
    );
}

export default Loading;