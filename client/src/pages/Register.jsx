import { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./styles/register.css";
import "./styles/modal.css";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://2dd856a23cacbe.lhr.life/register",
        { firstname, lastname, password, email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
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
                  src="../../../src/assets/images/welcome.jpeg"
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
        <Footer />

        {showSuccessModal && (
          <div className="modal">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                onClick={closeSuccessModal}
              >
                &times;
              </button>
              <p>
                Enregistrement réussis ! Vous allez être redirigé vers la page
                d'accueil.
              </p>
            </div>
          </div>
        )}

        {showErrorModal && (
          <div className="modal">
            <div className="modal-content">
              <button type="button" className="close" onClick={closeErrorModal}>
                &times;
              </button>
              <p>Inscription échoué! Essayez à nouveau.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
