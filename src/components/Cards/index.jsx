import React from "react";
import { NavLink } from "react-router-dom";

// Définition du composant fonctionnel "Card" qui prend les props "id", "cover", et "title"
const Card = ({ id, cover, title }) => {
  return (
    // Utilisation du composant Link de react-router-dom pour créer un lien vers la page logement
    <NavLink to={`/places/${id}`} className="card_detail-link">
      <div className="card_detail">
        <img className="card_detail-img" src={cover} alt={title} />
        <h3 className="card_detail-txt">{title}</h3>
      </div>
    </NavLink>
  );
};

export default Card;
