import GDSC_logo from "../images/gdsclogo.png";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer_wrap">
      <div className="Footer_left">
        <img src={GDSC_logo} alt="logo"></img>
        <span>GDSC Hackathon</span>
      </div>

      <span className="Footer_right">made by 놀러와요 해커톤 8조 😝😝😝</span>
    </div>
  );
}

export default Footer;
