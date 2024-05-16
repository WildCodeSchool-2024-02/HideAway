import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./styles/activity.css";

export default function Activity() {
  const { id } = useParams();

  const [currentActivity, setCurrentActivity] = useState({});

  useEffect(() => {
    const fetchActivity = async () => {
      const response = await fetch(
        "https://protojam-groupe-c.onrender.com/retraite"
      );
      const data = await response.json();
      const chosenActivity = data.find((a) => a.id === Number(id));
      setCurrentActivity(chosenActivity);
    };
    fetchActivity();
  });

  return (
    <div>
      <div className="container">
        <Header />
        {currentActivity && (
          <>
            <h1>HomeAway vous propose {currentActivity.titre}</h1>
            <div className="activity-flexbox">
              <img
                src={currentActivity.first_url}
                alt={currentActivity.titre}
                className="activity-image"
              />
              <div className="activity-right">
                <p>{currentActivity.description}</p>
                <h5>Exemples d'activités</h5>
                <div className="activity-activity">
                  <img
                    src={currentActivity.acti1_url}
                    alt={currentActivity.titre}
                    className="activity-image-bis"
                  />
                  <p>{currentActivity.activity1}</p>
                </div>
              </div>
            </div>
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}
