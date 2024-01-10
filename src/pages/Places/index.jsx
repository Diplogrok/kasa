import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jsonData from "../../assets/datas/Places.json";
import "../../assets/css/Styles.css";
import "../../assets/css/Slideshow.css";
import "../../assets/css/Places.css";
import "../../assets/css/Tags.css";
import "../../assets/css/Rating.css";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";

function Places() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedPlace = jsonData.find((item) => item.id === id);

  useEffect(() => {
    if (!selectedPlace) {
      navigate("/Error");
    }
  }, [selectedPlace, navigate]);

  if (!selectedPlace) {
    return null;
  }

  return (
    <div>
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
