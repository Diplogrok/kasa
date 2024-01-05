import "../../assets/css/Styles.css";
import "../../assets/css/About.css";
import background from "../../assets/images/background02.png";
import jsonData from "../../assets/datas/About.json";
import Collapse from "../../components/Collapse";

function About() {
  const data = jsonData;

  return (
    <div>
      <div className="background">
        <img src={background} alt="" className="background_img" />
      </div>
      {data && (
        <div className="details">
          {data.map((about) => (
            <Collapse key={about.id} title={about.title}>
              <p className="details_container-txt">{about.description}</p>
            </Collapse>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
