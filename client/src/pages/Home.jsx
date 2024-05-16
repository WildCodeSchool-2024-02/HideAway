import "./styles/home.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <h1> PAGE D'ACCUEIL </h1>
        <ul>
          <li>
            <Link to="/register" activeClassName="active">
              {" "}
              S'enregistrer
            </Link>
          </li>
          <li>
            <Link to="/login" activeClassName="active">
              {" "}
              Se connecter
            </Link>
          </li>
          <li>
            <Link to="/quizz" activeClassName="active">
              {" "}
              Faire le quizz
            </Link>
          </li>

          <li>
            <Link to="/activities" activeClassName="active">
              {" "}
              Voir toutes les activités{" "}
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
