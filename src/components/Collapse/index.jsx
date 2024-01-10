import React, { useState } from "react";
const Collapse = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
      {isExpanded && <div className="description_content-txt">{children}</div>}
    </div>
  );
};

export default Collapse;
