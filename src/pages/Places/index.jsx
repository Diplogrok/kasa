import { useParams } from "react-router-dom";
import jsonData from "../../assets/datas/Places.json";
import "../../assets/css/Places.css";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Tags from "../../components/Tags";
import Rating from "../../components/Rating";

function Places() {
  const { id } = useParams();
  const selectedPlace = jsonData.find((item) => item.id === id);

  if (!selectedPlace) {
    return <div>Place not found</div>;
  }

  return (
    <div>
      <Slideshow images={selectedPlace.pictures} />
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
        <Tags tags={selectedPlace.tags} />
        <Rating rating={selectedPlace.rating} />
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
