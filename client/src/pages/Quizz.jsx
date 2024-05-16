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
          activité idéal en fonction de vos réponses
        </p>
        <form>
          <section className="quizz-question-response">
            <h2 className="quizz-question">
              A qui cette expérience est destinée?
            </h2>
            <label className="quizz-label">
              Pour offrir, eh oui je suis généreux !
              <input
                type="radio"
                name="experience-destination"
                value="offrir"
                className="case"
              />
            </label>
            <label className="quizz-label">
              Pour moi, faut bien se faire plaisir !
              <input
                type="radio"
                name="experience-destination"
                value="pour-moi"
                className="case"
              />
            </label>
          </section>

          <section className="quizz-question-response">
            <h2 className="quizz-question">Pour combien de personnes?</h2>
            <label className="quizz-label">
              Entrez le nombre de personnes:
              <input type="number" className="case-number" />
            </label>
          </section>

          <section className="quizz-question-response">
            <h2 className="quizz-question">Quel âge avez-vous?</h2>
            <label className="quizz-label">
              18-30ans
              <input type="radio" name="age" value="18-30" className="case" />
            </label>
            <label className="quizz-label">
              30-50ans
              <input type="radio" name="age" value="30-50" className="case" />
            </label>
            <label className="quizz-label">
              50-99ans
              <input type="radio" name="age" value="50-99" className="case" />
            </label>
          </section>

          <section className="quizz-question-response">
            <h2 className="quizz-question">Avez vous des enfants?</h2>
            <label className="quizz-label">
              Oui (malheureusement)
              <input type="radio" name="enfants" value="oui" className="case" />
            </label>
            <label className="quizz-label">
              Non, surtout pas !
              <input type="radio" name="enfants" value="non" className="case" />
            </label>
          </section>

          <section className="quizz-question-response">
            <h2 className="quizz-question">Vous préférez:</h2>
            <label className="quizz-label">
              La plage
              <input
                type="radio"
                name="preference"
                value="plage"
                className="case"
              />
            </label>
            <label className="quizz-label">
              La montagne
              <input
                type="radio"
                name="preference"
                value="montagne"
                className="case"
              />
            </label>
            <label className="quizz-label">
              La prairie
              <input
                type="radio"
                name="preference"
                value="prairie"
                className="case"
              />
            </label>
            <label className="quizz-label">
              La ville
              <input
                type="radio"
                name="preference"
                value="ville"
                className="case"
              />
            </label>
          </section>

          <section className="quizz-question-response">
            <h2 className="quizz-question">Vous êtes plutôt:</h2>
            <label>
              Casse-cou, le goût du risque c'est tout moi
              <input
                type="radio"
                name="personality"
                value="casse-cou"
                className="case"
              />
            </label>
            <label>
              Fêtard, dansez jusqu'au bout de la nuit
              <input
                type="radio"
                name="personality"
                value="fetard"
                className="case"
              />
            </label>
            <label>
              Manuel, j'aime construire des choses moi même
              <input
                type="radio"
                name="personality"
                value="manuel"
                className="case"
              />
            </label>
            <label>
              Évasion, je veux partir dans un endroit insolite
              <input
                type="radio"
                name="personality"
                value="evasion"
                className="case"
              />
            </label>
          </section>
        </form>
        <Link to="/activity/:id" className="submit-quizz">
          Finir le Quizz
        </Link>
      </div>
      <Footer />
    </div>
  );
}
