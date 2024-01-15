import React from "react";
import Background from "../../components/Background";
import "../../assets/css/Background.css";
import "../../assets/css/Styles.css";
import "../../assets/css/Collapse.css";
import background from "../../assets/images/background02.png";
import jsonData from "../../assets/datas/About.json";
import Collapse from "../../components/Collapse";

function About() {
  const data = jsonData;

  return (
    <div className="about_page">
      <Background image={background}></Background>
      {/* Vérification de l'existence de données avant le rendu de la section de description */}
      {data && (
        <div className="description">
          {/* Mapping sur les données pour créer des composants Collapse pour chaque section */}
          {data.map((item) => (
            <Collapse key={item.id} title={item.title}>
              <p className="description_content-txt">{item.description}</p>
            </Collapse>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
