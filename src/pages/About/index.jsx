import React, { useState } from "react";
import "../../assets/css/Styles.css";
import "../../assets/css/About.css";
import background from "../../assets/images/background02.png";
import jsonData from "../../assets/datas/About.json";

function About() {
  const data = jsonData;
  const [expandedItems, setExpandedItems] = useState(
    Array(data.length).fill(false)
  );

  const handleIconClick = (index) => {
    const newExpandedItems = [...expandedItems];
    newExpandedItems[index] = !newExpandedItems[index];
    setExpandedItems(newExpandedItems);
  };

  return (
    <div>
      <div className="background">
        <img src={background} alt="" className="background_img" />
      </div>
      {data && (
        <div className="about">
          {data.map((about, index) => (
            <div className="about_container" key={about.id}>
              <div
                className="about_container-animation"
                onClick={() => handleIconClick(index)}>
                <h3 className="about_container-animation--title">
                  {about.title}
                </h3>
                <i
                  className={`fa-solid fa-chevron-up about_container-animation--ico ${
                    expandedItems[index] ? "expanded" : ""
                  }`}></i>
              </div>
              {expandedItems[index] && (
                <p className="about_container-txt">{about.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default About;
