import React from "react";
import Background from "../../components/Background";
import background from "../../assets/images/background01.png";
import "../../assets/css/Background.css";
import "../../assets/css/Styles.css";
import "../../assets/css/Cards.css";
import "../../assets/css/Home.css";
import jsonData from "../../assets/datas/Places.json";
import Cards from "../../components/Cards";

function Home() {
  const data = jsonData;

  return (
    <div>
      <Background image={background}>
        <h1 className="background_txt">Chez vous, partout et ailleurs</h1>
      </Background>
      {/* Vérification de l'existence de données avant le rendu de la section des cartes */}
      {data && (
        <div className="card">
          {/* Mapping sur les données pour créer des composants de cartes pour chaque lieu */}
          {data.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              cover={item.cover}
              title={item.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
