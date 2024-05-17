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
        "https://07c2bc2e82360c.lhr.life/login",
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

      if (response.status === 200) {
        console.info("Login successful:", response.data);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const sections = [
    {
      key: "forWho",
      question: "A qui cette expérience est-elle destinée?",
      options: [
        { label: "Pour offrir, eh oui je suis généreux !", value: "offrir" },
        { label: "Pour moi, faut bien se faire plaisir !", value: "pour-moi" },
      ],
    },
    {
      key: "personnes",
      question: "Pour combien de personnes?",
      input: true,
    },
    {
      key: "age",
      question: "Quel âge avez-vous?",
      options: [
        { label: "18-30ans", value: "18-30" },
        { label: "30-50ans", value: "30-50" },
        { label: "50-99ans", value: "50-99" },
      ],
    },
    {
      key: "enfants",
      question: "Avez-vous des enfants?",
      options: [
        { label: "Oui (malheureusement)", value: "oui" },
        { label: "Non, surtout pas !", value: "non" },
      ],
    },
    {
      key: "preference",
      question: "Vous préférez:",
      options: [
        { label: "La plage", value: "plage" },
        { label: "La montagne", value: "montagne" },
        { label: "La campagne", value: "prairie" },
        { label: "La ville", value: "ville" },
      ],
    },
    {
      key: "personality",
      question: "Vous êtes plutôt:",
      options: [
        {
          label: "Casse-cou, le goût du risque c'est tout moi",
          value: "casse-cou",
        },
        { label: "Fêtard, dansez jusqu'au bout de la nuit", value: "fetard" },
        {
          label: "Manuel, j'aime construire des choses moi-même",
          value: "manuel",
        },
        {
          label: "Évasion, je veux partir dans un endroit insolite",
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
                      Entrez le nombre de personnes:
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
