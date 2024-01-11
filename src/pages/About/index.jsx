import React from "react";
import Background from "../../components/Background";
import "../../assets/css/Background.css";
import "../../assets/css/Styles.css";
import "../../assets/css/About.css";
import background from "../../assets/images/background02.png";
import jsonData from "../../assets/datas/About.json";
import Collapse from "../../components/Collapse";

function About() {
  const data = jsonData;

  return (
    <div>
      <Background image={background}></Background>
      {data && (
        <div className="details">
          {data.map((item) => (
            <Collapse key={item.id} title={item.title}>
              <p className="details_container-txt">{item.description}</p>
            </Collapse>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
