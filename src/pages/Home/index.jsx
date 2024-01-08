import background from "../../assets/images/background01.png";
import "../../assets/css/Styles.css";
import jsonData from "../../assets/datas/Places.json";
import Cards from "../../components/Cards";

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
            <Cards
              key={item.id}
              id={item.id}
              cover={item.cover}
              title={item.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
