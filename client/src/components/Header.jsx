import { Link } from "react-router-dom";

import "./styles/header.css";

import logo from "../assets/images/logo.png";

function Header() {
  return (
    <div className="header">
      <nav className="nav-bar">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav-ul">
          <li className="nav-point">
            <Link to="/"> Accueil </Link>
          </li>

          <li className="nav-li">
            <Link to="/activities"> Activités </Link>
          </li>
          <li className="nav-li">
            <Link to="/quizz"> Quizz</Link>
          </li>
          <li className="nav-li">
            <Link to="/register"> S'inscrire</Link>
          </li>
          <li className="nav-li">
            <Link to="/login"> Se connecter</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
