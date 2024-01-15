import React from "react";

// Définition du composant fonctionnel "Rating" qui prend une prop "rating"
const Rating = ({ rating }) => {
  const renderStars = () => {
    // Calcul du nombre d'étoiles pleines en arrondissant la note
    const fullStars = Math.round(rating);
    const stars = [];

    // Boucle pour ajouter les étoiles pleines à la liste
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fa-solid fa-star filled"></i>);
    }

    // Calcul du nombre d'étoiles vides
    const remainingStars = 5 - stars.length;

    // Boucle pour ajouter les étoiles vides à la liste
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fa-solid fa-star"></i>);
    }

    return stars;
  };

  return <div className="subtitle_ranking">{renderStars()}</div>;
};

export default Rating;
