import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/register.css";

export default function Register() {
  return (
    <div>
      <div>
        <div className="background">
          <Header />
          <form method="post">
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
                        placeholder="Prénom"
                      />
                    </div>

                    <div data-mdb-input-init className="form-group">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Nom"
                      />
                    </div>

                    <div data-mdb-input-init className="form-group">
                      <input
                        type="password"
                        id="typePasswordX"
                        name="password"
                        placeholder="Mot de passe"
                      />
                    </div>

                    <div data-mdb-input-init className="form-group">
                      <input
                        type="email"
                        id="typeEmailX"
                        name="email"
                        placeholder="Email"
                      />
                    </div>

                    <Link to="/">
                      <button
                        data-mdb-button-init
                        data-mdb-ripple-init
                        type="submit"
                        className="connexionbutton"
                      >
                        S'inscrire
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}
