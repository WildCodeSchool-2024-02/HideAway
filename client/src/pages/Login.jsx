import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";

import welcome from "../assets/images/welcome.jpeg"

import "./styles/login.css";
import "./styles/modal.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const closeSuccessModal = () => setShowSuccessModal(false);
  const closeErrorModal = () => setShowErrorModal(false);

  return (
    <>
      <div>
        <div className="background">
          <Header />
          <form method="post">
            <section>
              <div className="cardcenter">
                <img
                  src={welcome}
                  className="imgwelcome"
                  alt="welcome"
                />
                <div className="cardlogin">
                  <p className="bienvenuetexte">De retour ?</p>
                  <hr />
                  <p className="logintext">
                    Entrez vos informations de{" "}
                    <span className="connexiontext">connexion</span>
                  </p>
                  <div data-mdb-input-init className="form-group">
                    <input
                      type="email"
                      id="typeEmailX"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div data-mdb-input-init className="form-group">
                    <input
                      type="password"
                      id="typePasswordX"
                      name="password"
                      placeholder="Mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    type="submit"
                    className="connexionbutton"
                  >
                    Connexion
                  </button>
                  <hr />
                  <p className="logintext">
                    Vous n'avez pas encore de compte ?
                    <Link to="/register">
                      <span className="button">S'inscrire</span>
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
      <Footer />
      {showSuccessModal && (
        <div className="modal">
          <div className="modal-content">
            <button type="button" className="close" onClick={closeSuccessModal}>
              &times;
            </button>
            <p>Bienvenue Fanny, tu vas être redirigé vers la page d'accueil.</p>
          </div>
        </div>
      )}

      {showErrorModal && (
        <div className="modal">
          <div className="modal-content">
            <button type="button" className="close" onClick={closeErrorModal}>
              &times;
            </button>
            <p>Échec de connexion ! Essayez à nouveau.</p>
          </div>
        </div>
      )}
    </>
  );
}
