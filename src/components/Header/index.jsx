import "../../assets/css/Styles.css";
import "../../assets/css/Header.css";
import logo from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="navbar_logo" />
      <div className="navbar_links">
        <div className="navbar_links-detail">
          {/* NavLink pour naviguer vers la page d'accueil */}
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? "active" : "")}>
            Accueil
          </NavLink>
        </div>

        <div className="navbar_links-detail">
          {/* NavLink pour naviguer vers la page "A Propos" */}
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}>
            A Propos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
