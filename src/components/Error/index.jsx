import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1 className="error_title">404</h1>
      <p className="error_subtitle">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error_link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
