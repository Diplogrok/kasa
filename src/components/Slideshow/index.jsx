import React, { useState } from "react";

// Définition du composant fonctionnel "Slideshow" qui prend une prop "images"
const Slideshow = ({ images }) => {
  // Utilisation du hook useState pour gérer l'index de l'image actuelle dans le tableau
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction) => {
    const lastIndex = images.length - 1;

    // Logique pour déterminer le nouvel index en fonction de la direction
    let newIndex;
    if (direction === "next") {
      newIndex = currentImageIndex === lastIndex ? 0 : currentImageIndex + 1;
    } else {
      newIndex = currentImageIndex === 0 ? lastIndex : currentImageIndex - 1;
    }
    // Mise à jour de l'état avec le nouvel index
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="carousel">
      {/* Vérification si le nombre d'images est supérieur à 1 */}
      {images.length > 1 && (
        <>
          <i
            className="fa-solid fa-chevron-left carousel_ico right"
            onClick={() => handleImageChange()}></i>
          <img
            className="carousel_img"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
          <i
            className="fa-solid fa-chevron-right carousel_ico left"
            onClick={() => handleImageChange("next")}></i>
          {/* Affichage du numéro de l'image actuelle */}
          {images.length > 1 && (
            <div className="imagecount">
              {currentImageIndex + 1}/{images.length}
            </div>
          )}
        </>
      )}
      {/* Si le nombre d'images est égal à 1, afficher uniquement cette image */}
      {images.length === 1 && (
        <img
          className="carousel_img"
          src={images[0]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      )}
    </div>
  );
};

export default Slideshow;
