import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/quizz.css";

export default function Quizz() {
  return (
    <div>
      <Header />
      <div className="quizz-content">
        <h1 className="main-title">Quizz</h1>
        <p className="quizz-description">
          Vous allez effectuer un test qui va déterminer quelle serais votre
          activité idéal en fonction de vos réponses{" "}
        </p>
        <form>
          <section className="quizz-question-response">
            <h2 className="quizz-question">
              A qui cette expérience est destinée?
            </h2>
            <label htmlFor="firstquestion">
              Pour offrir, eh oui je suis généreux !
            </label>
            <input type="checkbox" className="case" />

            <label htmlFor="lastname">
              Pour moi, faut bien se faire plaisir !
            </label>
            <input type="checkbox" className="case" />
          </section>

          <section className="quizz-question-response">
            <h2 className="quizz-question">Pour combien de personnes?</h2>
            <label htmlFor="firstname">Entrez le nombre de personnes: </label>
            <input type="number" className="case-number" />
            <br />
          </section>

          <section className="quizz-question-response">
            <h2 className="quizz-question">Quel âge avez-vous?</h2>
            <label htmlFor="firstquestion">18-30ans</label>
            <input type="checkbox" className="case" />
            <br />

            <label htmlFor="lastname">30-50ans</label>
            <input type="checkbox" className="case" />
            <br />

            <label htmlFor="lastname">50-99ans</label>
            <input type="checkbox" className="case" />
          </section>

          <section className="quizz-question-response">
            <h2 className="quizz-question">Avez vous des enfants?</h2>
            <label htmlFor="firstname">Oui (malheuresement)</label>
            <input type="checkbox" className="case" />
            <br />

            <label htmlFor="lastname">Non, surtout pas !</label>
            <input type="checkbox" className="case" />
          </section>

          <section className="quizz-question-response">
            <h2 className="quizz-question">Vous préferez:</h2>
            <label htmlFor="firstname">La plage</label>
            <input type="checkbox" className="case" />
            <br />
            <label htmlFor="firstname">La montagne</label>
            <input type="checkbox" className="case" />
            <br />
            <label htmlFor="firstname">La prairie</label>
            <input type="checkbox" className="case" />
            <br />
            <label htmlFor="firstname">La ville</label>
            <input type="checkbox" className="case" />
            <br />
          </section>
          <section className="quizz-question-response">
            <h2 className="quizz-question">Vous êtes plutôt:</h2>
            <label htmlFor="firstname">
              Casse-cou, le goût du risque c'est tout moi
            </label>
            <input type="checkbox" className="case" />
            <br />
            <label htmlFor="firstname">
              Fêtard, dansez jusqu'au bout de la nuit
            </label>
            <input type="checkbox" className="case" />
            <br />
            <label htmlFor="firstname">
              Manuel, j'aime constuire des choses moi même
            </label>
            <input type="checkbox" className="case" />
            <br />
            <label htmlFor="firstname">
              Évasion, je veut partir dans un endroit insolite
            </label>
            <input type="checkbox" className="case" />
            <br />
          </section>
        </form>
        <Link
          to="/activity/:id"
          className="submit-quizz"
          activeClassName="active"
        >
          Finir le Quizz
        </Link>
      </div>
      <Footer />
    </div>
  );
}
