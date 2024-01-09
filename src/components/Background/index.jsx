import React from "react";
import "../../assets/css/Background.css";

const Background = ({ image, children }) => (
  <div className="background">
    <img src={image} alt="" className="background_img" />
    {children}
  </div>
);

export default Background;
