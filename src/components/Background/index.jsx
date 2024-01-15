import React from "react";

// Définition du composant fonctionnel "Background" qui prend les props "image" et "children"
const Background = ({ image, children }) => (
  <div className="background">
    <img src={image} alt="background_img" className="background_img" />
    {children}
  </div>
);

export default Background;
