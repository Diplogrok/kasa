import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";

function Header() {
  return (
    <nav>
      <img src={logo} alt="" className="" />
      <Link to="">Accueil</Link>
      <Link to="/about">A Propos</Link>
    </nav>
  );
}

export default Header;
