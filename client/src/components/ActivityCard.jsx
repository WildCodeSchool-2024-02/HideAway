import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./styles/activitycard.css";

function ActivityCard({ activity }) {
  return (
    <div className="card">
      <div className="card__header">
        <img
          src={activity.first_url}
          alt={activity.titre}
          className="card__image"
        />
      </div>
      <div className="card__body">
        <h4> {activity.titre} !</h4>
        <p className="text">{activity.sous_titre}</p>
        <div>
          <h5 className="h5"> Exemples d'activités</h5>
          <div className="card__flex__activity">
            <div className="card__carroussel__activity">
              <img
                src={activity.acti1_url}
                alt={activity.titre}
                className="card__image__activity"
              />
              <p> {activity.activity1} </p>
            </div>
            <div className="card__carroussel__activity">
              <img
                src={activity.acti2_url}
                alt={activity.titre}
                className="card__image__activity"
              />
              <p> {activity.activity2} </p>
            </div>
            <div className="card__carroussel__activity">
              <img
                src={activity.acti3_url}
                alt={activity.titre}
                className="card__image__activity"
              />
              <p> {activity.activity3} </p>
            </div>
          </div>
        </div>
        <div className="button__section">
          <Link to={`/activity/${activity.id}`}>
            <button className="button__showmore" type="button">
              Je veux en savoir plus
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
ActivityCard.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_url: PropTypes.string.isRequired,
    titre: PropTypes.string.isRequired,
    sous_titre: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    acti1_url: PropTypes.string.isRequired,
    activity1: PropTypes.string.isRequired,
    acti2_url: PropTypes.string.isRequired,
    activity2: PropTypes.string.isRequired,
    acti3_url: PropTypes.string.isRequired,
    activity3: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActivityCard;
