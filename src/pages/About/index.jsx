import "../../assets/css/Styles.css";
import background from "../../assets/images/background02.png";
import jsonData from "../../assets/datas/About.json";
console.log(jsonData);
function About() {
  return (
    <div className="background">
      <img src={background} alt="" className="background_img" />
    </div>
  );
}

export default About;
