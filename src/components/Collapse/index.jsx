import React, { useState } from "react";

// Définition du composant fonctionnel "Collapse" qui prend les props "title" et "children"
const Collapse = ({ title, children }) => {
  // Utilisation du hook useState pour gérer l'état d'expansion du contenu
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour basculer l'état d'expansion
  const toggleCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`description_content ${isExpanded ? "expanded" : ""}`}>
      <div className="description_content-animation" onClick={toggleCollapse}>
        <h3 className="description_content-animation--title">{title}</h3>
        <i
          className={`fa-solid fa-chevron-up description_content-animation--ico ${
            isExpanded ? "expanded" : ""
          }`}></i>
      </div>
      {/* Contenu affiché uniquement si il est étendu */}
      {isExpanded && <div className="description_content-txt">{children}</div>}
    </div>
  );
};

export default Collapse;
