import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../assets/datas/Logements.json";
import "../../assets/css/Places.css";
import { renderStars } from "../Places/Rating";

function Places() {
  const { id } = useParams();
  const selectedPlace = jsonData.find((item) => item.id === id);
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const [isEquipmentsVisible, setEquipmentsVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  const toggleEquipments = () => {
    setEquipmentsVisible(!isEquipmentsVisible);
  };
  if (!selectedPlace) {
    return <div>Place not found</div>;
  }

  return (
    <div>
      <div className="caroussel">
        <i className="fa-solid fa-chevron-left caroussel_ico left"></i>
        <img
          className="caroussel_img"
          src={selectedPlace.pictures[0]}
          alt={selectedPlace.title}
        />
        <i className="fa-solid fa-chevron-right caroussel_ico right"></i>
      </div>
      <div className="container">
        <h1 className="container_title">{selectedPlace.title}</h1>
        <div className="container_host">
          <p className="container_host-name">{selectedPlace.host.name}</p>
          <img
            className="container_host-picture"
            src={selectedPlace.host.picture}
            alt={selectedPlace.host.name}
          />
        </div>
      </div>
      <p className="location">{selectedPlace.location}</p>
      <div className="subtitle">
        <div className="subtitle_tags">
          {selectedPlace.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="subtitle_ranking">
          {renderStars(selectedPlace.rating)}
        </div>
      </div>
      <div className="description">
        <div className="description_content">
          <div
            className="description_content-animation"
            onClick={toggleDescription}>
            <h3 className="description_content-animation--title">
              Description
            </h3>
            <i
              className={`fa-solid fa-chevron-up description_content-animation--ico ${
                isDescriptionVisible ? "expanded" : ""
              }`}></i>
          </div>
          {isDescriptionVisible && (
            <div className="description_content-txt">
              {selectedPlace.description}
            </div>
          )}
        </div>
        <div className="description_content">
          <div
            className="description_content-animation"
            onClick={toggleEquipments}>
            <h3 className="description_content-animation--title">
              Équipements
            </h3>
            <i
              className={`fa-solid fa-chevron-up description_content-animation--ico ${
                isEquipmentsVisible ? "expanded" : ""
              }`}></i>
          </div>
          {isEquipmentsVisible && (
            <div className="description_content-txt">
              {selectedPlace.equipments.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Places;
