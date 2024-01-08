import React, { useState } from "react";

const Slideshow = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction) => {
    const lastIndex = images.length - 1;
    let newIndex;

    if (direction === "next") {
      newIndex = currentImageIndex === lastIndex ? 0 : currentImageIndex + 1;
    } else {
      newIndex = currentImageIndex === 0 ? lastIndex : currentImageIndex - 1;
    }

    setCurrentImageIndex(newIndex);
  };

  const imageCount = `${currentImageIndex + 1}/${images.length}`;

  return (
    <div className="caroussel">
      {images.length > 1 && (
        <>
          <i
            className="fa-solid fa-chevron-left caroussel_ico right"
            onClick={() => handleImageChange("prev")}></i>
          <img
            className="caroussel_img"
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
          <i
            className="fa-solid fa-chevron-right caroussel_ico left"
            onClick={() => handleImageChange("next")}></i>
          {imageCount && <div className="imagecount">{imageCount}</div>}
        </>
      )}
      {images.length === 1 && (
        <img
          className="caroussel_img"
          src={images[0]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      )}
    </div>
  );
};

export default Slideshow;
