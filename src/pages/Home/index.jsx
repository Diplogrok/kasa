import { Link } from "react-router-dom";
import background from "../../assets/images/background01.png";
import "../../assets/css/Styles.css";
import jsonData from "../../assets/datas/Logements.json";

function Home() {
  const data = jsonData;

  return (
    <div>
      <div className="background">
        <img src={background} alt="" className="background_img" />
        <h1 className="background_txt">Chez vous, partout et ailleurs</h1>
      </div>
      {data && (
        <div className="card">
          {data.map((item) => (
            <Link key={item.id} to={`/places/${item.id}`}>
              <div className="card_detail">
                <img
                  className="card_detail-img"
                  src={item.cover}
                  alt={item.title}
                />
                <h3 className="card_detail-txt">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
