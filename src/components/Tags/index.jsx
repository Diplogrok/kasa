import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="subtitle_tags">
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
};

export default Tags;
