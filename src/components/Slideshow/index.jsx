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

  return (
    <div className="caroussel">
      <i
        className="fa-solid fa-chevron-left caroussel_ico left"
        onClick={() => handleImageChange("prev")}></i>
      <img
        className="caroussel_img"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <i
        className="fa-solid fa-chevron-right caroussel_ico right"
        onClick={() => handleImageChange("next")}></i>
    </div>
  );
};

export default Slideshow;
