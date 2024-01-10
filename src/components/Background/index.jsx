import React from "react";

const Background = ({ image, children }) => (
  <div className="background">
    <img src={image} alt="" className="background_img" />
    {children}
  </div>
);

export default Background;
