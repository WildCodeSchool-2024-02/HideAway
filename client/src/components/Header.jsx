import { Link } from "react-router-dom";

import "./styles/header.css";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            {" "}
            Home{" "}
          </Link>
        </li>

        <li>
          <Link to="/activities" activeClassName="active">
            {" "}
            Voir toutes les activités{" "}
          </Link>
        </li>
        <li>
          <Link to="/quizz" activeClassName="active">
            {" "}
            Faire le quizz
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
