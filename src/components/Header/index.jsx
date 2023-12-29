import "../../assets/css/Header.css";
import logo from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="navbar_logo" />
      <div className="navbar_links">
        <div className="navbar_links-detail">
          <NavLink to="">Accueil</NavLink>
        </div>
        <div className="navbar_links-detail">
          <NavLink to="/about">A Propos</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
