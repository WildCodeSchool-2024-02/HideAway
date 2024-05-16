import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.info("Login successful:", response.data);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <>
      <div>
        <div className="background">
          <Header />
          <form method="post" onSubmit={handleSubmit}>
            <section>
              <div className="cardcenter">
                <img
                  src="../../../src/assets/images/welcome.jpeg"
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
                  {/* <Link to="/"> */}
                  <button
                    data-mdb-button-init
                    data-mdb-ripple-init
                    type="submit"
                    className="connexionbutton"
                  >
                    Connexion
                  </button>
                  {/* </Link> */}
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
    </>
  );
}
