import "./styles/home.css";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import chevre from "../assets/images/chevre.jpg";

export default function Home() {


  return (
    <div>
        <div className="homecontainer">
          <div className="accueiltitle">
            <h1 className="page-title"> HideAway</h1>
            <div className="carousel">
              <img
                src={chevre}
                alt="bg"
                className="imgparachute"
              />
            </div>
          </div>
          <ul className="all-buttons">
            <li>
              <Link className="buttons" to="/register" activeClassName="active">
                {" "}
                💬 S'enregistrer
              </Link>
            </li>
            <li>
              <Link className="buttons" to="/login" activeClassName="active">
                {" "}
                ✅ Se connecter
              </Link>
            </li>
            <div className="buttons-quizz-all">
              <li className="button-quizz">
                <Link
                  to="/quizz"
                  className="text-quizz"
                  activeClassName="active"
                >
                  {" "}
                  ⏩ Faire le quizz
                </Link>
              </li>

              <li className="button-all">
                <Link
                  to="/activities"
                  className="text-quizz"
                  activeClassName="active"
                >
                  {" "}
                  ⭐ Voir toutes les activités{" "}
                </Link>
              </li>
            </div>
          </ul>         
        </div>   
        <Footer />  
    </div>
    
  );
}
