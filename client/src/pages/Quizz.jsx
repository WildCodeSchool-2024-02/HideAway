import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/quizz.css";

function Result({ response }) {
  return (
    <>
      <h1>{response.titre}</h1>;<h1>HideAway vous propose {response.titre}</h1>
      <div className="activity-flexbox">
        <img
          src={response.first_url}
          alt={response.titre}
          className="activity-image"
        />
        <div className="activity-right">
          <p>{response.description}</p>
          <h5>Exemples d'activités</h5>
          <div className="activity-activity">
            <img
              src={response.acti1_url}
              alt={response.titre}
              className="activity-image-bis"
            />
            <p>{response.activity1}</p>
          </div>
          <div className="activity-activity">
            <img
              src={response.acti2_url}
              alt={response.titre}
              className="activity-image-bis"
            />
            <p>{response.activity2}</p>
          </div>
          <div className="activity-activity">
            <img
              src={response.acti3_url}
              alt={response.titre}
              className="activity-image-bis"
            />
            <p>{response.activity3}</p>
          </div>
          <div className="activity-activity">
            <img
              src={response.acti4_url}
              alt={response.titre}
              className="activity-image-bis"
            />
            <p>{response.activity4}</p>
          </div>
        </div>
      </div>
    </>
  );
}

Result.propTypes = {
  response: PropTypes.shape({
    titre: PropTypes.string.isRequired,
    first_url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    acti1_url: PropTypes.string.isRequired,
    activity1: PropTypes.string.isRequired,
    acti2_url: PropTypes.string.isRequired,
    activity2: PropTypes.string.isRequired,
    acti3_url: PropTypes.string.isRequired,
    activity3: PropTypes.string.isRequired,
    acti4_url: PropTypes.string.isRequired,
    activity4: PropTypes.string.isRequired,
  }).isRequired,
};

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
  const [response, setResponse] = useState({});
  const [sendForm, setSendForm] = useState(false);

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

  const API_URL = "https://08f22acd381de7.lhr.life";
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseData = await axios.post(
        `${API_URL}/quizz`,
        {
          offer: selectedAnswers.forWho,
          nb_person: selectedAnswers.personnes,
          age: selectedAnswers.age,
          have_child: selectedAnswers.enfants,
          u_are: selectedAnswers.preference,
          u_like: selectedAnswers.personality,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (responseData.status === 200) {
        setResponse(responseData.data);
        setSendForm(true);
      } else {
        console.error("Quiz failed");
      }
    } catch (error) {
      console.error("Quiz failed: ", error);
    }
  };

  const sections = [
    {
      name: "offer",
      key: "forWho",
      question: "A qui cette expérience est-elle destinée?",
      options: [
        { label: "Pour offrir, eh oui je suis généreux ! 🎁", value: "offrir" },
        {
          label: "Pour moi, faut bien se faire plaisir ! 🗿",
          value: "pour-moi",
        },
      ],
    },
    {
      name: "nb_person",
      key: "personnes",
      question: "Pour combien de personnes ? ",
      input: true,
    },
    {
      name: "age",
      key: "age",
      question: "Quel âge avez-vous?",
      options: [
        { label: "18-30ans 👦", value: "18-30" },
        { label: "30-50ans 🧑", value: "30-50" },
        { label: "50-99ans 🧓", value: "50-99" },
      ],
    },
    {
      name: "have_child",
      key: "enfants",
      question: "Avez-vous des enfants?",
      options: [
        { label: "Oui (malheureusement) ✅", value: "oui" },
        { label: "Non, surtout pas ! ❌", value: "non" },
      ],
    },
    {
      name: "u_are",
      key: "preference",
      question: "Vous préférez:",
      options: [
        { label: "La plage 🏖️", value: "plage" },
        { label: "La montagne ⛰️", value: "montagne" },
        { label: "La campagne 🌾", value: "campagne" },
        { label: "La ville 🏙️", value: "ville" },
      ],
    },
    {
      name: "u_like",
      key: "personality",
      question: "Vous êtes plutôt:",
      options: [
        {
          label: "Casse-cou, le goût du risque c'est tout moi 🏄",
          value: "casse-cou",
        },
        {
          label: "Fêtard, dansez jusqu'au bout de la nuit 🎉",
          value: "fetard",
        },
        {
          label: "Manuel, j'aime construire des choses moi-même 🔨",
          value: "manuel",
        },
        {
          label: "Évasion, je veux partir dans un endroit insolite 🚗",
          value: "evasion",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="backgroundquizz">
        <Header />
        <div className="quizz-content">
          <h1 className="main-title">Quizz</h1>
          <p className="quizz-description">
            Vous allez effectuer un test qui va déterminer quelle serait votre
            activité idéale en fonction de vos réponses.
          </p>
          <form method="post" onSubmit={handleSubmit}>
            {sections.map((section, index) =>
              currentSection === index ? (
                <section className="quizz-question-response" key={section.key}>
                  <h2 className="quizz-question">{section.question}</h2>
                  {section.input ? (
                    <label className="quizz-label">
                      Entrez le nombre de personnes : 👥
                      <input
                        type="number"
                        name="nb_person"
                        className="case-number"
                        value={selectedAnswers.personnes}
                        onChange={(e) =>
                          handleInputChange("personnes", e.target.value)
                        }
                      />
                    </label>
                  ) : (
                    section.options.map((option) => (
                      <label className="quizz-label" key={option.value}>
                        {option.label}
                        <input
                          type="checkbox"
                          className="case"
                          name={section.key}
                          checked={
                            selectedAnswers[section.key] === option.value
                          }
                          onChange={() =>
                            handleCheckboxChange(section.key, option.value)
                          }
                        />
                      </label>
                    ))
                  )}
                </section>
              ) : null
            )}
            <div className="quizz-navigation">
              {currentSection > 0 && (
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
                <button className="submit-quizz" type="submit">
                  {" "}
                  Valider le quizz
                </button>
              )}
            </div>
          </form>
        </div>
        {sendForm && <Result response={response} />}
        <div className="footer2">
          <Footer />
        </div>
      </div>
    </div>
  );
}
