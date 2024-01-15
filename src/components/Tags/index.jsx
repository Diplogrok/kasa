import React from "react";

// Définition du composant fonctionnel "Tags" qui prend "tags" comme prop
const Tags = ({ tags }) => {
  return (
    <div className="container_left-tags">
      {/* Mapping sur le tableau de tags pour créer des éléments "span" pour chaque tag */}
      {tags.map((tag, index) => (
        // Chaque tag est rendu à l'intérieur d'un élément "span" avec une clé unique
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
};

export default Tags;
