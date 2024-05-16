import { useState } from "react";
import axios from "axios";

import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/quizz.css";

export default function Quizz() {
  const [selectedAnswers, setSelectedAnswers] = useState({
    forWho: "",
    age: "",
    enfants: "",
    preference: "",
    personality: "",
    personnes: "",
  });

  const [currentSection, setCurrentSection] = useState(0);

  const handleCheckboxChange = (section, value) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [section]: prevState[section] === value ? "" : value,
    }));
  };

  const handleInputChange = (section, value) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [section]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://httpbin.org/post",
        selectedAnswers,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.info("Quizz submission successful:", response.data);
      } else {
        console.error("Quizz submission failed");
      }
    } catch (error) {
      console.error("Quizz submission failed", error);
    }
  };

  const sections = [
    <section className="quizz-question-response" key="forWho">
      <h2 className="quizz-question">
        A qui cette expérience est-elle destinée?
      </h2>
      <label className="quizz-label">
        Pour offrir, eh oui je suis généreux !
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.forWho === "offrir"}
          onChange={() => handleCheckboxChange("forWho", "offrir")}
        />
      </label>
      <label className="quizz-label">
        Pour moi, faut bien se faire plaisir !
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.forWho === "pour-moi"}
          onChange={() => handleCheckboxChange("forWho", "pour-moi")}
        />
      </label>
    </section>,

    <section className="quizz-question-response" key="personnes">
      <h2 className="quizz-question">Pour combien de personnes?</h2>
      <label className="quizz-label">
        Entrez le nombre de personnes:
        <input
          type="number"
          className="case-number"
          value={selectedAnswers.personnes}
          onChange={(e) => handleInputChange("personnes", e.target.value)}
        />
      </label>
    </section>,

    <section className="quizz-question-response" key="âge">
      <h2 className="quizz-question">Quel âge avez-vous?</h2>
      <label className="quizz-label">
        18-30ans
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.age === "18-30"}
          onChange={() => handleCheckboxChange("age", "18-30")}
        />
      </label>
      <label className="quizz-label">
        30-50ans
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.age === "30-50"}
          onChange={() => handleCheckboxChange("age", "30-50")}
        />
      </label>
      <label className="quizz-label">
        50-99ans
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.age === "50-99"}
          onChange={() => handleCheckboxChange("age", "50-99")}
        />
      </label>
    </section>,

    <section className="quizz-question-response" key="enfant">
      <h2 className="quizz-question">Avez-vous des enfants?</h2>
      <label className="quizz-label">
        Oui (malheureusement)
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.enfants === "oui"}
          onChange={() => handleCheckboxChange("enfants", "oui")}
        />
      </label>
      <label className="quizz-label">
        Non, surtout pas !
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.enfants === "non"}
          onChange={() => handleCheckboxChange("enfants", "non")}
        />
      </label>
    </section>,

    <section className="quizz-question-response" key="preferez">
      <h2 className="quizz-question">Vous préférez:</h2>
      <label className="quizz-label">
        La plage
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.preference === "plage"}
          onChange={() => handleCheckboxChange("preference", "plage")}
        />
      </label>
      <label className="quizz-label">
        La montagne
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.preference === "montagne"}
          onChange={() => handleCheckboxChange("preference", "montagne")}
        />
      </label>
      <label className="quizz-label">
        La campagne
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.preference === "prairie"}
          onChange={() => handleCheckboxChange("preference", "prairie")}
        />
      </label>
      <label className="quizz-label">
        La ville
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.preference === "ville"}
          onChange={() => handleCheckboxChange("preference", "ville")}
        />
      </label>
    </section>,

    <section className="quizz-question-response" key="choice">
      <h2 className="quizz-question">Vous êtes plutôt:</h2>
      <label className="quizz-label">
        Casse-cou, le goût du risque c'est tout moi
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.personality === "casse-cou"}
          onChange={() => handleCheckboxChange("personality", "casse-cou")}
        />
      </label>
      <label className="quizz-label">
        Fêtard, dansez jusqu'au bout de la nuit
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.personality === "fetard"}
          onChange={() => handleCheckboxChange("personality", "fetard")}
        />
      </label>
      <label className="quizz-label">
        Manuel, j'aime construire des choses moi-même
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.personality === "manuel"}
          onChange={() => handleCheckboxChange("personality", "manuel")}
        />
      </label>
      <label className="quizz-label">
        Évasion, je veux partir dans un endroit insolite
        <input
          type="checkbox"
          className="case"
          checked={selectedAnswers.personality === "evasion"}
          onChange={() => handleCheckboxChange("personality", "evasion")}
        />
      </label>
    </section>,
  ];

  return (
    <div>
      <div className="backgroundquizz">
        <Header />
        <div className="quizz-content">
          <h1 className="main-title">Quizz</h1>
          <p className="quizz-description">
            Vous allez effectuer un test qui va déterminer quelle serait votre
            activité idéale en fonction de vos réponses.{" "}
          </p>
          <form onSubmit={handleSubmit} className="form">
            {sections[currentSection]}
            <div className="quizz-navigation">
              {currentSection > 5 && (
                <button
                  type="button"
                  onClick={() => setCurrentSection(currentSection - 1)}
                  className="nav-button"
                >
                  Précédent
                </button>
              )}
              {currentSection < sections.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentSection(currentSection + 1)}
                  className="nav-button"
                >
                  Suivant
                </button>
              ) : (
                <button type="submit" className="submit-quizz">
                  Finir le Quizz
                </button>
              )}
            </div>
          </form>
          <Footer />
        </div>
      </div>
    </div>
  );
}
