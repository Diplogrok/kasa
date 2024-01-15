import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jsonData from "../../assets/datas/Places.json";
import "../../assets/css/Styles.css";
import "../../assets/css/Slideshow.css";
import "../../assets/css/Collapse.css";
import "../../assets/css/Places.css";
import "../../assets/css/Tags.css";
import "../../assets/css/Rating.css";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";

function Places() {
  // Utilisation du hook `useNavigate` pour la navigation programmatique
  const navigate = useNavigate();
  // Utilisation du hook `useParams` pour extraire les paramètres
  const { id } = useParams();
  const selectedPlace = jsonData.find((item) => item.id === id);

  // Utilisation du hook `useEffect` pour effectuer une action lors du montage du composant
  useEffect(() => {
    // Si le lieu n'est pas trouvé, rediriger vers la page d'erreur
    if (!selectedPlace) {
      navigate("/Error");
    }
  }, [selectedPlace, navigate]); // Dépendance pour s'assurer que le hook est appelé lorsqu'il y a un changement dans `selectedPlace` ou `navigate`

  // Si le lieu n'est pas trouvé, retourner null pour éviter le rendu de la page
  if (!selectedPlace) {
    return null;
  }

  return (
    <div className="places_page">
      <Slideshow images={selectedPlace.pictures} />
      <div className="container">
        <div className="container_left">
          <h1 className="container_left-title">{selectedPlace.title}</h1>
          <p className="container_left-location">{selectedPlace.location}</p>
          <div className="container_left-tags">
            <Tags tags={selectedPlace.tags} />
          </div>
        </div>
        <div className="container_right">
          <div className="container_right-host">
            <p className="container_right-host--name">
              {selectedPlace.host.name}
            </p>
            <img
              className="container_right-host--picture"
              src={selectedPlace.host.picture}
              alt={selectedPlace.host.name}
            />
          </div>
          <div className="container_right-rating">
            <Rating rating={selectedPlace.rating} />
          </div>
        </div>
      </div>

      <div className="description">
        <Collapse title="Description">
          <div className="description_content-txt">
            {selectedPlace.description}
          </div>
        </Collapse>
        <Collapse title="Équipements">
          <div className="description_content-txt">
            {selectedPlace.equipments.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default Places;
