import background from "../../assets/images/background01.png";
import "../../assets/css/Styles.css";
import jsonData from "../../assets/datas/Data.json";
console.log(jsonData);
function Home() {
  const data = jsonData;

  return (
    <div>
      <img src={background} alt="" className="" />{" "}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
