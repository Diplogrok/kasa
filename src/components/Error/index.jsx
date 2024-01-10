import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1 className="error_title">404</h1>
      <p className="error_subtitle">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
};

export default Error;
