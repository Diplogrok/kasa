import { useParams } from "react-router-dom";
import jsonData from "../../assets/datas/Logements.json";
import "../../assets/css/Places.css";

function Places() {
  const { id } = useParams();

  const selectedPlace = jsonData.find((item) => item.id === id);

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
      <div className="">

      </div>
    </div>
  );
}
export default Places;
