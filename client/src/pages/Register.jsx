import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";

import welcome from "../assets/images/welcome.jpeg";

import "./styles/register.css";
import "./styles/modal.css";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const BASE_URL = "https://08f22acd381de7.lhr.life";

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
        window.location.href = "/";
      }, 6000);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [showSuccessModal]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${BASE_URL}/register`,
        { firstname, lastname, password, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.info(response);
        setShowSuccessModal(true);
      } else {
        setShowErrorModal(true);
      }
    } catch (error) {
      setShowErrorModal(true);
    }
  };

  const closeSuccessModal = () => setShowSuccessModal(false);
  const closeErrorModal = () => setShowErrorModal(false);

  return (
    <div>
      <div className="background">
        <Header />
        <form method="post" onSubmit={handleSubmit}>
          <section>
            <div>
              <div className="cardcenter">
                <img
                  src={welcome}
                  className="imgwelcome"
                  alt="welcome"
                />
                <div className="cardlogin">
                  <p className="bienvenuetexte">Bienvenue !</p>
                  <hr />
                  <h2>Inscription</h2>

                  <div data-mdb-input-init className="form-group">
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="Prénom"
                    />
                  </div>

                  <div data-mdb-input-init className="form-group">
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Nom"
                      required
                    />
                  </div>

                  <div data-mdb-input-init className="form-group">
                    <input
                      type="password"
                      id="typePasswordX"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mot de passe"
                      required
                    />
                  </div>

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

                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    type="submit"
                    className="connexionbutton"
                  >
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </section>
        </form>

        {showSuccessModal && (
          <div className="modal">
            <div className="modal-content">
              <p>
                Bienvenue Fanny ! Tu vas être redirigée vers la page d'accueil.
              </p>
            </div>
            <button type="button" className="close" onClick={closeSuccessModal}>
              &times;
            </button>
          </div>
        )}

        {showErrorModal && (
          <div className="modal">
            <div className="modal-content">
              <button type="button" className="close" onClick={closeErrorModal}>
                &times;
              </button>
              <p>Inscription échouée ! Essayez à nouveau.</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
